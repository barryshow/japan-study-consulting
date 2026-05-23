// ============================================================
// 学部（本科）数据合并层
// 将 universities.ts（基本信息）与 university-faculties.ts（学部·入试详情）合并
// ============================================================

import { nationalUniversities, publicUniversities, privateUniversities, type University } from "@/data/schools/universities";
import { undergraduateAdmissions, type UndergraduateAdmissionInfo } from "@/data/university-faculties";

// ============================================================
// 合并后的本科学部大学类型
// ============================================================

export interface CombinedUndergraduateUniversity extends University {
  /** 详细学部入试数据（如果在此数据源中存在） */
  admissionDetail?: UndergraduateAdmissionInfo;
  /** 是否有详细学部·入试数据 */
  hasDetail: boolean;
  /** 学部总数 */
  facultyCount: number;
  /** 用于页面内搜索的关键词缓存 */
  searchText: string;
}

// ============================================================
// 合并
// ============================================================

const allUniversities: University[] = [
  ...nationalUniversities,
  ...publicUniversities,
  ...privateUniversities,
];

/** 构建 universityId -> UndergraduateAdmissionInfo 的查找表 */
const admissionMap = new Map<string, UndergraduateAdmissionInfo>();
for (const ad of undergraduateAdmissions) {
  admissionMap.set(ad.universityId, ad);
}

function buildSearchText(uni: University, detail?: UndergraduateAdmissionInfo): string {
  const parts: string[] = [
    uni.name, uni.nameJa, uni.location,
    ...uni.features, ...uni.suitableFor,
  ];
  if (detail) {
    parts.push(detail.admissionSystem, detail.ejuPolicy, detail.ejuReferenceScores);
    for (const fac of detail.faculties) {
      parts.push(fac.name, fac.nameJa, ...fac.departments, fac.admissionType, fac.ejukRequirements ?? "", fac.notes ?? "");
    }
  }
  return parts.join(" ").toLowerCase();
}

/** 获取所有合并后的本科大学列表 */
export function getAllUndergraduateUniversities(): CombinedUndergraduateUniversity[] {
  return allUniversities
    .filter(u => u.programs.some(p => p.level === "undergraduate"))
    .map((uni) => {
      const detail = admissionMap.get(uni.id);
      return {
        ...uni,
        admissionDetail: detail,
        hasDetail: !!detail,
        facultyCount: detail ? detail.faculties.length : uni.programs.filter(p => p.level === "undergraduate").length,
        searchText: buildSearchText(uni, detail),
      };
    });
}

/** 按ID获取单个合并大学 */
export function getUndergraduateUniversityById(id: string): CombinedUndergraduateUniversity | undefined {
  const uni = allUniversities.find(u => u.id === id);
  if (!uni) return undefined;
  const detail = admissionMap.get(id);
  return {
    ...uni,
    admissionDetail: detail,
    hasDetail: !!detail,
    facultyCount: detail ? detail.faculties.length : uni.programs.filter(p => p.level === "undergraduate").length,
    searchText: buildSearchText(uni, detail),
  };
}

// ============================================================
// 页面内搜索
// ============================================================

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[()（）・/／,，\s-]+/g, "")
    .replace(/[ｧ-ﾝﾞﾟ]/g, (c) => {
      const mapping: Record<string, string> = {
        "ｧ": "ア", "ｨ": "イ", "ｩ": "ウ", "ｪ": "エ", "ｫ": "オ",
        "ｶ": "カ", "ｷ": "キ", "ｸ": "ク", "ｹ": "ケ", "ｺ": "コ",
        "ｻ": "サ", "ｼ": "シ", "ｽ": "ス", "ｾ": "セ", "ｿ": "ソ",
        "ﾀ": "タ", "ﾁ": "チ", "ﾂ": "ツ", "ﾃ": "テ", "ﾄ": "ト",
        "ﾅ": "ナ", "ﾆ": "ニ", "ﾇ": "ヌ", "ﾈ": "ネ", "ﾉ": "ノ",
        "ﾊ": "ハ", "ﾋ": "ヒ", "ﾌ": "フ", "ﾍ": "ヘ", "ﾎ": "ホ",
        "ﾏ": "マ", "ﾐ": "ミ", "ﾑ": "ム", "ﾒ": "メ", "ﾓ": "モ",
        "ﾔ": "ヤ", "ﾕ": "ユ", "ﾖ": "ヨ",
        "ﾗ": "ラ", "ﾘ": "リ", "ﾙ": "ル", "ﾚ": "レ", "ﾛ": "ロ",
        "ﾜ": "ワ", "ｦ": "ヲ", "ﾝ": "ン",
        "ﾞ": "゛", "ﾟ": "゜",
      };
      return mapping[c] || c;
    });
}

export function searchUndergraduateUniversities(
  query: string,
  universities: CombinedUndergraduateUniversity[],
): CombinedUndergraduateUniversity[] {
  const q = normalize(query.trim());
  if (!q || q.length < 1) return universities;

  const scored = universities.map((uni) => {
    let score = 0;
    const searchTarget = normalize(uni.searchText);

    if (normalize(uni.name) === q) score = 100;
    else if (searchTarget.includes(q)) {
      if (normalize(uni.name).includes(q)) score = 80;
      else if (normalize(uni.nameJa).includes(q)) score = 75;
      else score = 60;
    } else if (q.length >= 2 && searchTarget.includes(q)) {
      score = 50;
    }

    return { uni, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.uni);
}
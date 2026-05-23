// ============================================================
// 日本高度人才加分校（SGU Top Type A类全12校 + 扩展38校）学部·本科数据
// 按各大学官网2026年实际募集要项整理
// 留学生入试：外国人留学生特別選抜 / EJU利用 / 一般入試
// 数据采集日期：2026年5月
// 扩展数据来源：university-faculties-supplement.ts
// ============================================================

import { undergraduateAdmissionsSupplement } from "./university-faculties-supplement";

export interface UniversityFaculty {
  name: string;           // 学部名（中文/英文）
  nameJa: string;         // 学部名（日文）
  departments: string[];  // 学科/专攻
  hasInternationalAdmission: boolean; // 是否有留学生特别选考
  admissionType: string;  // 入试方式
  ejukRequirements?: string; // EJU要求科目
  ejuScoreReference?: string; // EJU参考合格分数（基于合格者平均/名校志向塾等予備校数据）
  englishRequirements?: string; // 英语要求
  acceptanceRate?: string; // 留学生合格倍率/竞争度
  notes?: string;         // 特記事項
}

export interface UndergraduateAdmissionInfo {
  universityId: string;
  universityName: string;
  type: "national" | "private" | "public";
  portalUrl: string;
  admissionSystem: string; // 入试制度概要
  ejuPolicy: string;       // EJU利用方针
  ejuReferenceScores: string; // EJU参考合格分数（各科目目标分数+总分参考）
  faculties: UniversityFaculty[];
  examSchedule?: string;   // 出愿·考试日程概要
  tuitionInfo: {
    examFee: string;
    admissionFee: string;
    annualTuition: string;
  };
  livingCosts: {
    monthlyRent: string;
    monthlyFood: string;
    monthlyUtilities: string;
    monthlyTotal: string;
    note: string;
  };
  totalFourYearCost: string;
  internationalStudentQuota: string;
  applicationDocuments: string;
  keyNotes: string[];
  dataSources: string[];
}

export const undergraduateAdmissions: UndergraduateAdmissionInfo[] = [
  // ============================================================
  // 国立大学 — 10校
  // ============================================================

  {
    universityId: "utokyo",
    universityName: "东京大学",
    type: "national",
    portalUrl: "https://www.u-tokyo.ac.jp/ja/admissions/undergraduate.html",
    admissionSystem: "外国学校卒業学生特別選考（私費外国人留学生）— 全科类统一选考。前期課程（2年·教養学部）入學后再分专业。出願時選科類（文一文二文三/理一理二理三），第1次書類審査→第2次学力試験（小論文+学力試験+面接）。入学后2年间在教養学部接受通识教育，3年级起依据成绩「進学振分」进入各学部。",
    ejuPolicy: "必须提交。文科類：日本語+総合科目+数学1。理科類：日本語+数学2+理科（物理·化学·生物中选2科）。2025年6月或11月成绩有效。",
    ejuReferenceScores:
      "【文科類】日本語350+ / 総合科目190+ / 数学1 180+ → 総合720+（合格者平均）。【理科類】日本語330+ / 数学2 180+ / 理科2科（物理+化学）170+ → 総合680+。【全科類】TOEFL iBT 100+ / IELTS 7.0+ 必须有。",
    faculties: [
      {
        name: "文科一類（→法学部·教養学部）",
        nameJa: "文科一類",
        departments: [
          "【法学部】第1類（総合法学）", "第2類（法律プロフェッション）", "第3類（政治）",
          "【教養学部後期】教養学科（国際関係·地域研究·文化人類学等）", "学際科学科", "統合自然科学科"
        ],
        hasInternationalAdmission: true,
        admissionType: "外国学校卒業学生特別選考（第2次）",
        ejukRequirements: "日本語+総合科目+数学1",
        ejuScoreReference: "日本語360+ / 総合190+ / 数学1 185+",
        englishRequirements: "TOEFL iBT 100+ / IELTS 7.0+（出願2年内）",
        notes: "文科一類→法学部为最强路径。法学部司法試験合格率日本トップ。教養学部后期课程可选国际关系方向。"
      },
      {
        name: "文科二類（→経済学部·教養学部）",
        nameJa: "文科二類",
        departments: [
          "【経済学部】経済学科（経済理論·経済政策·経済史）", "経営学科（経営戦略·金融·会計）", "金融学科（数量金融·金融工学·リスク管理）"
        ],
        hasInternationalAdmission: true,
        admissionType: "外国学校卒業学生特別選考（第2次）",
        ejukRequirements: "日本語+総合科目+数学1",
        ejuScoreReference: "日本語350+ / 総合190+ / 数学1 180+",
        englishRequirements: "TOEFL iBT 100+ / IELTS 7.0+",
        acceptanceRate: "金融学科競争率最高（3-5倍）",
        notes: "経済学部3学科均为热门，金融学科竞争最激烈。経営学科分経営戦略·金融·会計三方向。"
      },
      {
        name: "文科三類（→文学部·教育学部·教養学部）",
        nameJa: "文科三類",
        departments: [
          "【文学部】人文学科（哲学·中国思想文化学·倫理学·宗教学·美学芸術学）",
          "人文学科（日本史学·東洋史学·西洋史学·考古学·文化人類学）",
          "人文学科（言語学·日本語日本文学·中国語中国文学·英語英米文学·仏語仏文学等）",
          "人文学科（心理学·社会学·社会心理学·図書館情報学）",
          "【教育学部】総合教育科学科（教育学·教育心理学·教育社会学·生涯学習）",
          "【教養学部後期】教養学科·学際科学科·統合自然科学科"
        ],
        hasInternationalAdmission: true,
        admissionType: "外国学校卒業学生特別選考（第2次）",
        ejukRequirements: "日本語+総合科目+数学1",
        ejuScoreReference: "日本語350+ / 総合190+ / 数学1 180+",
        englishRequirements: "TOEFL iBT 100+ / IELTS 7.0+"
      },
      {
        name: "理科一類（→工学部·理学部·薬学部·教養学部）",
        nameJa: "理科一類",
        departments: [
          "【工学部】社会基盤学科A（構造·材料·地盤）", "社会基盤学科B（計画·交通·流域）", "建築学科", "都市工学科（都市計画·都市環境）",
          "機械工学科A（熱流体·設計·加工）", "機械工学科B（ロボット·制御·生体）", "機械情報工学科", "航空宇宙工学科",
          "精密工学科", "電子情報工学科", "電気電子工学科", "物理工学科", "計数工学科（数理情報·システム情報）",
          "マテリアル工学科A（金属·無機·加工）", "マテリアル工学科B（有機·高分子·バイオ）", "応用化学科", "化学システム工学科", "化学生命工学科", "システム創成学科",
          "【理学部】数学科·情報科学科·物理学科·天文学科",
          "地球惑星物理学科·地球惑星環境学科·化学科·生物化学科·生物学科·生物情報科学科",
          "【薬学部】薬科学科（4年制·研究志向）",
          "【教養学部後期】統合自然科学科（物理·数理·物質·生命·認知·スポーツ科学）"
        ],
        hasInternationalAdmission: true,
        admissionType: "外国学校卒業学生特別選考（第2次）",
        ejukRequirements: "日本語+数学2+理科（物理+化学推奨）",
        ejuScoreReference: "日本語340+ / 数学2 185+ / 理科2科 180+",
        englishRequirements: "TOEFL iBT 100+ / IELTS 7.0+",
        acceptanceRate: "工学部各学科根据進学振分成績競爭，人気学科倍率2-5倍",
        notes: "最大科類（合格人数最多）。工学部全国最大规模（16学科+4学科系）。進学振分：机械·航空宇宙人气最高。"
      },
      {
        name: "理科二類（→農学部·薬学部·理学部·工学部）",
        nameJa: "理科二類",
        departments: [
          "【農学部】応用生命科学課程（生命化学·生命工学·生命機能制御·生物資源創成）",
          "環境資源科学課程（森林環境資源·水圏生物生産·生物素材科学·環境地理情報）",
          "獣医学課程（6年制·獣医師養成）",
          "【薬学部】薬科学科（4年制·創薬研究）",
          "【理学部】生物学科·生物化学科·生物情報科学科",
          "【工学部】化学生命工学科·応用化学科·化学システム工学科"
        ],
        hasInternationalAdmission: true,
        admissionType: "外国学校卒業学生特別選考（第2次）",
        ejukRequirements: "日本語+数学2+理科（化学+物理/生物）",
        ejuScoreReference: "日本語330+ / 数学2 175+ / 理科2科 175+",
        englishRequirements: "TOEFL iBT 100+ / IELTS 7.0+",
        notes: "理科二類→農学部為主要進路。獣医学課程日本最難関（定員30名、留学生枠极少）。生物学·化学方向特化。"
      },
      {
        name: "理科三類（→医学部医学科）",
        nameJa: "理科三類",
        departments: [
          "【医学部】医学科（6年制·卒後医師国家試験+初期研修2年）",
          "健康総合科学科（看護学·健康科学·公衆衛生学·医療政策·医史学）"
        ],
        hasInternationalAdmission: true,
        admissionType: "外国学校卒業学生特別選考（第2次）",
        ejukRequirements: "日本語+数学2+理科（物理·化学·生物中选2科/化学必須）",
        ejuScoreReference: "日本語350+ / 数学2 190+ / 理科2科 190+（日本最高レベル）",
        englishRequirements: "TOEFL iBT 100+ / IELTS 7.0+",
        acceptanceRate: "日本最高難度·倍率10-20倍·留学生枠极少（每年度1-2名）",
        notes: "日本最难考学部，偏差値最高峰。留学生数月极少。很多年份留学生0合格。健康総合科学科相对可能性较高。"
      },
    ],
    examSchedule: "出願：2025年12月1日-5日／第1次審査結果：2026年1月26日／第2次試験：2026年2月25日·3月4日／合格発表：2026年3月10日",
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "642,960円" },
    livingCosts: {
      monthlyRent: "60,000〜80,000円（文京区·豊島区·板橋区）",
      monthlyFood: "35,000〜45,000円",
      monthlyUtilities: "12,000〜18,000円",
      monthlyTotal: "110,000〜140,000円",
      note: "东京生活成本日本最高。学校宿舍（三鷹·豊島）月额30,000〜50,000円但名额极少。"
    },
    totalFourYearCost: "学费约260万円 + 生活费约530万〜670万円 = 总计约790万〜930万円（4年）",
    internationalStudentQuota: "私費外国人留学生特別選考：全科類合計約20-30名合格/年。各科類3-6名程度，竞争倍率通常10倍以上。",
    applicationDocuments: "①入学志願票 ②写真 ③EJU成績通知書（复印件可）④TOEFL/IELTS成绩（直送）⑤高中毕业证明+成绩单（厳封）⑥推荐信（校长或班主任）⑦志望理由书 ⑧护照复印件 ⑨在留卡复印件（在日者）",
    keyNotes: [
      "入学时属前期課程（教養学部），2年级结束后根据成绩分专业（进学振分）",
      "留学生特别选考枠极少（每年約20-30人合格）",
      "TOEFL 100+ / EJU 730+ 为基本要求",
      "2026年度起大学入学共通テスト不强制要求"
    ],
    dataSources: ["https://www.u-tokyo.ac.jp/ja/admissions/undergraduate.html", "https://www.u-tokyo.ac.jp/ja/prospective-students/admissions/special-programs.html"],
  },

  {
    universityId: "kyoto-u",
    universityName: "京都大学",
    type: "national",
    portalUrl: "https://www.kyoto-u.ac.jp/ja/admissions/undergraduate",
    admissionSystem: "学部ごとに入试制度不同。工学部有「私費外国人留学生特別選考」。Kyoto iUP（国際本科プログラム）覆盖10学部（全学35名枠·10月入学·6个月準備課程）。文系多数学部无留学生特别枠，需与日本学生参加同一一般入试（共通テスト+個別試験）。",
    ejuPolicy: "工学部私費外国人入试：日本語+数学2+物理+化学（合计680+或650+且数理化350+）。iUP不要求日语成绩（入學後補習）。文系一般入试需共通テスト。",
    ejuReferenceScores:
      "【工学部私費留学生選抜】日本語320+ / 数学2 180+ / 物理+化学 180+ → 総合680+。【iUP】不要求EJU/日语。TOEFL iBT 80+ / IELTS 6.0+（推荐）。【一般入試】共通テスト85%+ 二次試験偏差値65+。",
    faculties: [
      {
        name: "総合人間学部",
        nameJa: "総合人間学部",
        departments: ["総合人間学科（人間科学系：教育学·心理学·社会学·文化人類学）", "（文化系：哲学·文学·歴史·芸術·言語情報）", "（自然系：数学·物理学·化学·生物学·情報科学）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（10月入学·6个月準備課程）",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "日本唯一将人文·社会·自然三大領域融合在一个学部的文理融合型学部。无单独留学生选考；iUP経由可。"
      },
      {
        name: "文学部",
        nameJa: "文学部",
        departments: ["哲学基礎文化学系（哲学·倫理学·宗教学·美学芸術学·日本哲学史）", "東洋文化学系（国語学国文学·中国語学中国文学·中国哲学史·インド古典学·仏教学·東洋史学）", "西洋文化学系（西洋古典学·スラブ語学·英語英米文学·独語独文学·仏語仏文学·イタリア語学イタリア文学）", "歴史基礎文化学系（日本史学·東洋史学·西洋史学·考古学）", "行動·環境文化学系（言語学·心理学·社会学·地理学）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（10月入学）· 不設留学生特别选考",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "5学系20+専門分野覆盖人文社会全部领域。留学生基本走iUP路线"
      },
      {
        name: "教育学部",
        nameJa: "教育学部",
        departments: ["教育科学科（現代教育基礎学系：教育哲学·教育史学·教育方法学·発達教育学）", "（教育心理学系：認知心理学·発達心理学·臨床心理学）", "（相関教育システム論系：比較教育学·教育社会学·生涯教育学·高等教育論）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（10月入学）",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "3学系融合学科。教育心理学系人气极高"
      },
      {
        name: "法学部",
        nameJa: "法学部",
        departments: ["法学·政治学（基礎法学：法制史·法哲学·法社会学·比較法）", "（公法系：憲法·行政法·租税法·国際法）", "（民刑事法系：民法·商法·民事訴訟法·刑法·刑事訴訟法）", "（政治学系：政治理論·比較政治·国際政治·政治史）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（10月入学）· 无留学生特别选考",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "京都大学看板学部之一。留学生一般入试难度极高（共通テスト+面接）。"
      },
      {
        name: "経済学部",
        nameJa: "経済学部",
        departments: ["経済学科（経済理論·経済政策·国際経済·開発経済·経済史）", "経営学科（経営戦略·経営組織·マーケティング·会計·ファイナンス）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（10月入学）",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        acceptanceRate: "経営学科人气极高（一般入试偏差值67.5）",
        notes: "経営学科是日本国立大学中极少数独立设置。理论經濟学日本顶级。"
      },
      {
        name: "理学部",
        nameJa: "理学部",
        departments: ["数学科（代数·幾何·解析·数理科学）", "物理学科（理論物理·素粒子·宇宙物理·物性物理）", "宇宙物理学教室", "地球惑星科学科（地球物理学·地質学·気象学·海洋科学）", "化学科（物理化学·無機化学·有機化学·生物化学）", "生物科学科（分子生物学·細胞生物学·生態学·進化学）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP + 一般入试",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "物理学教室和数学教室日本Top级别。ノーベル賞輩出多数。"
      },
      {
        name: "工学部",
        nameJa: "工学部",
        departments: ["地球工学科（土木工学·環境工学·資源工学）", "建築学科（建築デザイン·建築構造·建築環境·都市計画）", "物理工学科（機械システム·材料科学·原子核工学·宇宙工学）", "電気電子工学科（電子物性·集積回路·通信システム·電力工学）", "情報学科（計算機科学·ソフトウェア·知能情報·通信情報·数理工学）", "理工化学科（創成化学·化学プロセス·分子工学）"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選考 + Kyoto iUP + ICP英语课程",
        ejukRequirements: "日本語+数学2+物理+化学（合计680+或650+且数理化350+）",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "日本唯一有独立留学生特别选考的学部（京大特色）。情報学科是理工人气最高之一。ICP英语课程面向留学生。"
      },
      {
        name: "医学部",
        nameJa: "医学部",
        departments: ["医学科（6年制）", "人間健康科学科（看護·検査技術·理学療法·作業療法）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（人間健康科学科）",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+",
        notes: "医学科不设留学生特别选考（需一般入试）"
      },
      {
        name: "薬学部",
        nameJa: "薬学部",
        departments: ["薬科学科（4年制）", "薬学科（6年制）"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP（薬科学科）",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+"
      },
      {
        name: "農学部",
        nameJa: "農学部",
        departments: ["生物資源科学科", "応用生命科学科", "地域環境工学科", "食料·環境経済学科", "森林科学科"],
        hasInternationalAdmission: true,
        admissionType: "Kyoto iUP",
        englishRequirements: "TOEFL iBT 72+ / IELTS 6.0+"
      },
    ],
    examSchedule: "工学部私費外国人：事前審査2025年10月14-17日／出願12月16-19日／試験2026年1月31日／合格発表2月6日。iUP：出願2025年11月4日-12月4日／合格発表2026年4月6日／入学2026年10月",
    tuitionInfo: { examFee: "17,000円（iUP 9,800円）", admissionFee: "282,000円（iUP免除）", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "40,000〜60,000円（左京区·北区·上京区）",
      monthlyFood: "30,000〜40,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "80,000〜115,000円",
      note: "京都生活成本约东京70%。大学宿舍（吉田·熊野·修学院）月额20,000〜45,000円。"
    },
    totalFourYearCost: "学费约243万円（iUP入学金免除约215万円）+ 生活费约380万〜550万円 = 总计约600万〜790万円（4年）",
    internationalStudentQuota: "工学部私費外国人選抜：若干名（通常5名以内合格/年）。iUP：全学35名/年（覆盖10学部）。ICP（土木英语课程）：30名/年。",
    applicationDocuments: "【工学部外国人選抜】①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥AAO事前审查结果。【iUP】①オンライン出願 ②TOEFL/IELTS ③高中成绩 ④推荐信 ⑤essay ⑥面接。",
    keyNotes: [
      "iUP是留学生最推荐路径（35名枠，入学金免除，学费减免可能）",
      "工学部留学生特别选考需AAO事前审查",
      "文系多数学部无留学生特别选考，必须走iUP或一般入试（共通テスト）",
      "ICP（土木工程英语课程）另有30名枠"
    ],
    dataSources: ["https://www.kyoto-u.ac.jp/ja/admissions/undergraduate", "https://www.kyoto-u.ac.jp/ja/admissions/aao", "https://www.t.kyoto-u.ac.jp/ja/admissions/undergraduate"],
  },

  {
    universityId: "titech",
    universityName: "东京科学大学",
    type: "national",
    portalUrl: "https://admissions.isct.ac.jp",
    admissionSystem: "2024年10月由东工大+东京医科齿科大学合并成立。学部入试：私費外国人留学生特別選抜（理学院·工学院·物質理工学院·情報理工学院·環境社会理工学院）+ 医科齿科系学部入试。",
    ejuPolicy: "理科3科型：日本語+数学2+理科（物理+化学）。EJU日本語300+、数学2+理科合计350+。TOEFL iBT 80+ / TOEIC 780+ / IELTS 6.0+。",
    ejuReferenceScores:
      "【理工系全学院】日本語300+ / 数学2 175+ / 理科（物理+化学）175+ → 総合650+。【情報理工学院】日本語310+ / 数学2 185+（日本最强CS本科之一）。【医学部·歯学部】一般入試，留学生枠极少。TOEFL iBT 80+必须。",
    faculties: [
      {
        name: "理学院",
        nameJa: "理学院",
        departments: ["数学科", "物理学科", "化学科", "地球惑星科学科"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（物理+化学）"
      },
      {
        name: "工学院",
        nameJa: "工学院",
        departments: ["機械系", "電気電子系", "情報通信系", "システム制御系", "経営工学系"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（物理+化学）"
      },
      {
        name: "物質理工学院",
        nameJa: "物質理工学院",
        departments: ["材料系", "応用化学系"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（物理+化学）"
      },
      {
        name: "情報理工学院",
        nameJa: "情報理工学院",
        departments: ["情報工学系", "数理·計算科学系"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（物理+化学）",
        notes: "日本最强CS本科之一"
      },
      {
        name: "環境·社会理工学院",
        nameJa: "環境·社会理工学院",
        departments: ["建築学系", "土木·環境工学系", "社会·人間科学系"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（物理+化学）"
      },
      {
        name: "医学部",
        nameJa: "医学部",
        departments: ["医学科（6年制）", "歯学科（6年制）"],
        hasInternationalAdmission: false,
        admissionType: "一般入试（与日本学生同考）",
        notes: "合并自东京医科齿科大学，留学生枠极少"
      },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "635,400円" },
    livingCosts: {
      monthlyRent: "55,000〜75,000円（目黒区·大田区·港区）",
      monthlyFood: "35,000〜45,000円",
      monthlyUtilities: "12,000〜18,000円",
      monthlyTotal: "100,000〜140,000円",
      note: "大岡山·すずかけ台校区均在东京23区内，生活成本同东京。大学宿舍月额25,000〜50,000円。"
    },
    totalFourYearCost: "学费约254万円 + 生活费约480万〜670万円 = 总计约730万〜920万円（4年）",
    internationalStudentQuota: "私費外国人留学生特別選抜：全学院合計15-25名合格/年。情報理工学院热门（竞争倍率8-10倍）。",
    applicationDocuments: "①入学願書 ②EJU成绩通知書 ③TOEFL/TOEIC/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書（任意）⑦护照复印件。",
    keyNotes: [
      "2024年合并后新大学，留学生入试制度仍在调整",
      "理工系強力——日本'理工科清华'",
      "EJU要求高：日本語300+ / 数理化350+",
      "被选为MEXT国际卓越研究大学"
    ],
    dataSources: ["https://admissions.isct.ac.jp", "https://www.titech.ac.jp/english/admissions"],
  },

  {
    universityId: "osaka-u",
    universityName: "大阪大学",
    type: "national",
    portalUrl: "https://www.osaka-u.ac.jp/en/admissions/undergraduate",
    admissionSystem: "私費外国人留学生特別選抜覆盖多数文系·理系学部。部分学部分前期·後期日程。出願需提交EJU+英语成绩，选考为書類審査+面接（部分学部有小论文/学力試験）。",
    ejuPolicy: "文系：日本語+総合科目+数学1。理系：日本語+数学2+理科（2科目）。日本語300+为基本要求。",
    ejuReferenceScores:
      "【文系学部】日本語300+ / 総合科目175+ / 数学1 165+ → 総合640+。【理系学部】日本語300+ / 数学2 170+ / 理科2科 165+ → 総合635+。【基礎工学部】数学2 175+推荐。【外国語学部】日本語320+推荐。TOEFL iBT 70-80+ / IELTS 5.5-6.0+。",
    faculties: [
      {
        name: "文学部",
        nameJa: "文学部",
        departments: ["人文学科（哲学·史学·文学·人間科学·芸術学）"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "法学部",
        nameJa: "法学部",
        departments: ["法学科", "国際公共政策学科"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "経済学部",
        nameJa: "経済学部",
        departments: ["経済学科", "経営学科"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "理学部",
        nameJa: "理学部",
        departments: ["数学科", "物理学科", "化学科", "生物科学科"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（2科目）",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "工学部",
        nameJa: "工学部",
        departments: ["応用自然科学科", "応用理工学科", "電子情報工学科", "環境·エネルギー工学科", "地球総合工学科"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（物理+化学）",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "基礎工学部",
        nameJa: "基礎工学部",
        departments: ["数理科学科", "物理工学科", "化学工学科", "生物工学科", "情報科学科", "システム科学科"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（2科目）",
        englishRequirements: "TOEFL iBT / IELTS",
        notes: "阪大特色学部，理+工融合"
      },
      {
        name: "医学部",
        nameJa: "医学部",
        departments: ["医学科（6年制）", "保健学科（看護·放射線·検査技術）"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜（保健学科のみ）",
        ejukRequirements: "日本語+数学2+理科",
        notes: "医学科留学生枠极少，保健学科有枠"
      },
      {
        name: "薬学部",
        nameJa: "薬学部",
        departments: ["薬学科（6年制）", "薬科学科（4年制）"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（化学+物理/生物）"
      },
      {
        name: "外国語学部",
        nameJa: "外国語学部",
        departments: ["外国語学科（25専攻語）"],
        hasInternationalAdmission: true,
        admissionType: "私費外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        notes: "日本最大规模外语学部"
      },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "40,000〜60,000円（吹田·豊中·箕面）",
      monthlyFood: "30,000〜40,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "80,000〜115,000円",
      note: "大阪生活成本约东京70%。大学宿舍月额20,000〜45,000円。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约380万〜550万円 = 总计约620万〜790万円（4年）",
    internationalStudentQuota: "私費外国人留学生特別選抜：各学部数名〜10名程度。全学留学生約2,500名（含大学院）。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦日本語学校成绩·出席证明（在日者）⑧护照复印件。",
    keyNotes: [
      "2025年英语名改为The University of Osaka",
      "多数文理系学部均设有私费外国人留学生特別選抜",
      "基礎工学部是阪大特色（理+工融合，类似MIT工程科学）"
    ],
    dataSources: ["https://www.osaka-u.ac.jp/en/admissions/undergraduate", "https://www.eng.osaka-u.ac.jp/en/entrance/f_admissions/"],
  },

  {
    universityId: "tohoku",
    universityName: "东北大学",
    type: "national",
    portalUrl: "https://www.tohoku.ac.jp/en/admissions/undergraduate.html",
    admissionSystem: "私費外国人留学生特別選抜 + FGL（Future Global Leadership）英语本科项目（全英文授课·无需日语）。FGL项目下设3个本科课程：Advanced Molecular Chemistry、International Mechanical and Aerospace Engineering、Applied Marine Biology。",
    ejuPolicy: "留学生特別選抜：日本語+数学1或2+総合科目或理科（学部不同）。FGL不要求EJU。",
    ejuReferenceScores:
      "【文系学部】日本語290+ / 総合科目170+ / 数学1 160+ → 総合620+。【理系学部】日本語290+ / 数学2 170+ / 理科2科 165+ → 総合625+。【工学部】日本語300+ / 数学2 180+ / 理科 175+（材料科学世界第一·竞争度高）。【FGL】TOEFL iBT 79+ / IELTS 6.0+。",
    faculties: [
      { name: "文学部", nameJa: "文学部", departments: ["人文社会科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "教育学部", nameJa: "教育学部", departments: ["教育科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "法学部", nameJa: "法学部", departments: ["法学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "経済学部", nameJa: "経済学部", departments: ["経済学科", "経営学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜 + FGL", ejukRequirements: "日本語+総合科目+数学1", notes: "FGL下设有英语授课经营课程" },
      { name: "理学部", nameJa: "理学部", departments: ["数学科", "物理学科", "化学科", "生物学科", "地学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜 + FGL", ejukRequirements: "日本語+数学2+理科（2科目）", notes: "FGL AMC分子化学、AMB应用海洋生物学" },
      { name: "工学部", nameJa: "工学部", departments: ["機械知能·航空工学科", "電気情報物理工学科", "化学·バイオ工学科", "材料科学総合学科", "建築·社会環境工学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜 + FGL（IMAC-U）", ejukRequirements: "日本語+数学2+理科（物理+化学）", notes: "材料科学世界第一；FGL IMAC-U英语课程" },
      { name: "医学部", nameJa: "医学部", departments: ["医学科（6年制）", "保健学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜", ejukRequirements: "日本語+数学2+理科（2科目）", notes: "留学生枠极少" },
      { name: "歯学部", nameJa: "歯学部", departments: ["歯学科（6年制）"], hasInternationalAdmission: false, admissionType: "一般入试", notes: "无留学生特别选考" },
      { name: "薬学部", nameJa: "薬学部", departments: ["薬学科（6年制）", "創薬科学科（4年制）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜", ejukRequirements: "日本語+数学2+理科（化学+物理/生物）" },
      { name: "農学部", nameJa: "農学部", departments: ["生物生産科学科", "応用生物化学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生特別選抜 + FGL（AMB）", ejukRequirements: "日本語+数学2+理科（2科目）" },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "35,000〜50,000円（青葉区·太白区）",
      monthlyFood: "25,000〜35,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "70,000〜100,000円",
      note: "仙台生活成本约东京60%。大学宿舍月额15,000〜35,000円，性价比极高。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约340万〜480万円 = 总计约580万〜720万円（4年）",
    internationalStudentQuota: "私費外国人留学生特別選抜：各学部数名。FGL英语项目：各课程约10名/年。全学留学生約2,100名。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦日本語学校证明（在日者）⑧在留卡/护照复印件。FGL另需essay+面接。",
    keyNotes: [
      "FGL英语本科项目：无需日语，TOEFL 79+即可申请（10月入学）",
      "仙台生活成本约东京60%",
      "THE连续5年日本科研力排名第一",
      "工学·材料科学世界顶尖"
    ],
    dataSources: ["https://www.tohoku.ac.jp/en/admissions/undergraduate.html", "https://www.eng.tohoku.ac.jp/english/admission/"],
  },

  {
    universityId: "nagoya-u",
    universityName: "名古屋大学",
    type: "national",
    portalUrl: "https://www.nagoya-u.ac.jp/admission/",
    admissionSystem: "私費外国人留学生選抜 + G30国際プログラム（全英文本科）。G30下设6个本科课程：Automotive Engineering、Chemistry、Physics、Biological Science、Social Sciences、Japan-in-Asia Cultural Studies。文系学部留学生需EJU + 英语。",
    ejuPolicy: "留学生選抜：日本語+総合科目/数学/理科（学部不同）。G30不要求EJU。",
    ejuReferenceScores:
      "【文系学部】日本語290+ / 総合科目170+ / 数学1 160+ → 総合620+。【理系学部】日本語290+ / 数学2 170+ / 理科2科 165+ → 総合625+。【情報学部】日本語300+ / 数学2 180+。【G30】TOEFL iBT 80+ / IELTS 6.0+。",
    faculties: [
      { name: "文学部", nameJa: "文学部", departments: ["人文学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "法学部", nameJa: "法学部", departments: ["法律·政治学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "経済学部", nameJa: "経済学部", departments: ["経済学科", "経営学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜 + G30", ejukRequirements: "日本語+総合科目+数学1", notes: "G30社会科学课程英语可" },
      { name: "理学部", nameJa: "理学部", departments: ["数学科", "物理学科", "化学科", "生物学科", "地球惑星科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜 + G30", ejukRequirements: "日本語+数学2+理科（2科目）", notes: "G30 物理·化学·生物英语课程" },
      { name: "工学部", nameJa: "工学部", departments: ["機械·航空宇宙工学科", "電気電子情報工学科", "化学·生物工学科", "物理工学科", "環境土木·建築学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜 + G30 Automotive", ejukRequirements: "日本語+数学2+理科（物理+化学）", notes: "G30汽车工程（丰田总部所在地·世界领先）" },
      { name: "医学部", nameJa: "医学部", departments: ["医学科（6年制）", "保健学科"], hasInternationalAdmission: false, admissionType: "一般入试", notes: "留学生枠极少" },
      { name: "農学部", nameJa: "農学部", departments: ["生物環境科学科", "資源生物科学科", "応用生命科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科（2科目）" },
      { name: "情報学部", nameJa: "情報学部", departments: ["自然情報学科", "人間·社会情報学科", "コンピュータ科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科", notes: "日本少数独立情报学部" },
      { name: "教育学部", nameJa: "教育学部", departments: ["人間発達科学科（教育学·教育心理学·発達臨床学·学校心理学）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+総合科目+数学1" },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "35,000〜50,000円（千種区·昭和区·天白区）",
      monthlyFood: "25,000〜35,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "70,000〜100,000円",
      note: "名古屋生活成本适中（约东京65%）。大学宿舍月额15,000〜35,000円。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约340万〜480万円 = 总计约580万〜720万円（4年）",
    internationalStudentQuota: "私費外国人留学生選抜：各学部数名〜10名程度。G30英语项目：各课程约10名/年。全学留学生約2,000名。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦护照复印件。G30另需essay+SAT/ACT/IB等国际成绩（推荐）。",
    keyNotes: [
      "G30汽车工程：世界顶尖、丰田总部所在地",
      "情报学部是日本少数独立设置的情报学部之一",
      "名古屋生活成本适中，通学便利"
    ],
    dataSources: ["https://www.nagoya-u.ac.jp/admission/", "http://admissions.g30.nagoya-u.ac.jp/"],
  },

  {
    universityId: "hokkaido-u",
    universityName: "北海道大学",
    type: "national",
    portalUrl: "https://www.hokudai.ac.jp/admission/",
    admissionSystem: "私費外国人留学生入試（前期·後期日程）+ ISP（Integrated Science Program）英语课程 + MJSP（Modern Japanese Studies Program）英语课程。多数文理系学部均设留学生枠。",
    ejuPolicy: "文系：日本語+総合科目+数学1。理系：日本語+数学2+理科。日本語270+为基本要求。ISP不要求EJU。",
    ejuReferenceScores:
      "【文系学部】日本語270+ / 総合科目165+ / 数学1 155+ → 総合590+。【理系学部】日本語270+ / 数学2 165+ / 理科2科 160+ → 総合595+。【獣医学部】日本語290+ / 理科2科 175+（留学生可考的稀有兽医）。【ISP】TOEFL iBT 79+ / IELTS 6.0+。",
    faculties: [
      { name: "文学部", nameJa: "文学部", departments: ["人文科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "法学部", nameJa: "法学部", departments: ["法学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "経済学部", nameJa: "経済学部", departments: ["経済学科", "経営学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "理学部", nameJa: "理学部", departments: ["数学科", "物理学科", "化学科", "生物科学科", "地球惑星科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試 + ISP", ejukRequirements: "日本語+数学2+理科（2科目）", notes: "ISP全英文授课物理·化学·生物课程" },
      { name: "工学部", nameJa: "工学部", departments: ["機械知能工学科", "電気電子工学科", "環境社会工学科", "応用理工学科", "情報理工学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（物理+化学）" },
      { name: "農学部", nameJa: "農学部", departments: ["農業科学科", "森林科学科", "水産科学科", "食品科学科", "応用生命科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（2科目）", notes: "日本最好的农学部之一" },
      { name: "医学部", nameJa: "医学部", departments: ["医学科（6年制）", "保健学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科", notes: "留学生枠极少" },
      { name: "歯学部", nameJa: "歯学部", departments: ["歯学科（6年制）"], hasInternationalAdmission: false, admissionType: "一般入试" },
      { name: "獣医学部", nameJa: "獣医学部", departments: ["獣医学科（6年制）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（2科目）", notes: "全国罕见留学生可考的兽医学科" },
      { name: "水産学部", nameJa: "水産学部", departments: ["水産学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科", notes: "日本少数独立水产学部" },
      { name: "薬学部", nameJa: "薬学部", departments: ["薬学科（6年制）", "薬科学科（4年制）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（化学+物理/生物）" },
      { name: "教育学部", nameJa: "教育学部", departments: ["教育学科（教育学·教育心理学·教育社会学·生涯学習·特別支援教育）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "30,000〜45,000円（北区·東区·中央区）",
      monthlyFood: "25,000〜35,000円",
      monthlyUtilities: "10,000〜15,000円（冬季暖气费高）",
      monthlyTotal: "65,000〜95,000円",
      note: "札幌生活成本约东京60%，生活品质极高。大学宿舍月额15,000〜30,000円。冬季暖气费月增5,000〜10,000円。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约310万〜455万円 = 总计约550万〜700万円（4年）",
    internationalStudentQuota: "私費外国人留学生入試：各学部数名〜10名程度。ISP英语项目：約10名/年。全学留学生約1,800名。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩（部分学部）④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦日本語学校证明（在日者）⑧护照复印件。ISP另需essay。",
    keyNotes: [
      "札幌生活品质极高、成本约东京60%",
      "獣医学部和水産学部是留学生可考的稀有选择",
      "MJSP（现代日本学）全英文课程",
      "北海道自然环境优美，适合安静学习"
    ],
    dataSources: ["https://www.hokudai.ac.jp/admission/", "https://www.global.hokudai.ac.jp/"],
  },

  {
    universityId: "kyushu-u",
    universityName: "九州大学",
    type: "national",
    portalUrl: "https://www.kyushu-u.ac.jp/en/admission/",
    admissionSystem: "私費外国人留学生入試（全学部）+ 英語プログラム（Engineering、Bioresource and Bioenvironment、International Undergraduate Program等）。留学生入试包括書類審査+面接+学力試験。",
    ejuPolicy: "文系：日本語+総合科目+数学1。理系：日本語+数学2+理科。日本語280+为基本要求。",
    ejuReferenceScores:
      "【文系学部】日本語280+ / 総合科目170+ / 数学1 160+ → 総合610+。【理系学部】日本語280+ / 数学2 170+ / 理科2科 165+ → 総合615+。【医学部】留学生枠极少，需日本語320+ / 理科3科180+。【芸術工学部】日本語280+ / 総合170+，需作品集/実技。",
    faculties: [
      { name: "文学部", nameJa: "文学部", departments: ["人文学科（哲学·史学·文学·人間科学）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "法学部", nameJa: "法学部", departments: ["法学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "経済学部", nameJa: "経済学部", departments: ["経済学科", "経営学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1", notes: "英语授课IPE项目可选" },
      { name: "理学部", nameJa: "理学部", departments: ["数学科", "物理学科", "化学科", "生物学科", "地球惑星科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（2科目）" },
      { name: "工学部", nameJa: "工学部", departments: ["機械航空工学科", "電気情報工学科", "化学工学科", "材料工学科", "地球環境工学科", "エネルギー科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試 + 英語プログラム", ejukRequirements: "日本語+数学2+理科（物理+化学）" },
      { name: "農学部", nameJa: "農学部", departments: ["生物資源環境学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試 + 英語プログラム", ejukRequirements: "日本語+数学2+理科（2科目）" },
      { name: "医学部", nameJa: "医学部", departments: ["医学科（6年制）", "保健学科", "生命科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科", notes: "留学生枠极少" },
      { name: "歯学部", nameJa: "歯学部", departments: ["歯学科（6年制）"], hasInternationalAdmission: false, admissionType: "一般入试" },
      { name: "芸術工学部", nameJa: "芸術工学部", departments: ["デザイン学科", "音響設計学科", "画像設計学科", "環境設計学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1或理科", notes: "日本少有的艺术工学结合学部" },
      { name: "薬学部", nameJa: "薬学部", departments: ["薬学科（6年制）", "創薬科学科（4年制）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（化学+物理/生物）" },
      { name: "教育学部", nameJa: "教育学部", departments: ["教育学科（教育学·教育心理学·教育社会学·比較教育学）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "共創学部", nameJa: "共創学部", departments: ["共創学科（文理融合·課題解決型學際学部·2018年新設）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試 + 英語プログラム", ejukRequirements: "日本語+総合科目+数学1或2", notes: "2018年新設。留学生人气急升。文理横断型。全英文授课可选。" },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "35,000〜45,000円（東区·西区·中央区）",
      monthlyFood: "25,000〜35,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "70,000〜95,000円",
      note: "福冈多次被评为全球最宜居城市。大学宿舍月额15,000〜30,000円。物价较东京低30%。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约340万〜455万円 = 总计约580万〜700万円（4年）",
    internationalStudentQuota: "私費外国人留学生入試：各学部数名〜10名程度。全学留学生約2,300名。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦护照复印件。英語プログラム另需essay。",
    keyNotes: [
      "福冈多次被评为全球最宜居城市",
      "芸術工学部是日本少数艺术+工学结合的学部",
      "英语本科项目Engineering和Bioresource可选"
    ],
    dataSources: ["https://www.kyushu-u.ac.jp/en/admission/", "https://www.design.kyushu-u.ac.jp/en/"],
  },

  {
    universityId: "tsukuba",
    universityName: "筑波大学",
    type: "national",
    portalUrl: "https://ac.tsukuba.ac.jp/en/examinations/",
    admissionSystem: "私費外国人留学生入試 + 英語プログラム（Undergraduate Program of International Social Studies、Interdisciplinary Engineering等）。筑波大学采用学群制（非传统学部制），留学生入试在各学群·学类分别实施。",
    ejuPolicy: "人文·文化学群：日本語+総合科目+数学1。理工学群：日本語+数学2+理科。英語プログラム不要求EJU。",
    ejuReferenceScores:
      "【人文·社会·人間学群】日本語280+ / 総合科目165+ / 数学1 155+ → 総合600+。【理工·情報学群】日本語280+ / 数学2 170+ / 理科2科 165+ → 総合615+。【体育専門学群】日本語270+ / 総合160+，需実技試験。【TISS英语本科】TOEFL iBT 79+ / IELTS 6.0+。",
    faculties: [
      { name: "人文·文化学群", nameJa: "人文·文化学群", departments: ["人文学類", "比較文化学類", "日本語·日本文化学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "社会·国際学群", nameJa: "社会·国際学群", departments: ["社会学類", "国際総合学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試 + TISS英语本科", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "人間学群", nameJa: "人間学群", departments: ["教育学類", "心理学類", "障害科学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "生命環境学群", nameJa: "生命環境学群", departments: ["生物学類", "生物資源学類", "地球学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科（2科目）" },
      { name: "理工学群", nameJa: "理工学群", departments: ["数学類", "物理学類", "化学類", "応用理工学類", "工学システム学類", "社会工学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試 + 英语プログラム", ejukRequirements: "日本語+数学2+理科（物理+化学）" },
      { name: "情報学群", nameJa: "情報学群", departments: ["情報科学類", "情報メディア創成学類", "知識情報·図書館学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科", notes: "日本顶尖情报科学教育" },
      { name: "医学群", nameJa: "医学群", departments: ["医学類（6年制）", "看護学類", "医療科学類"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+数学2+理科", notes: "留学生枠极少" },
      { name: "体育専門学群", nameJa: "体育専門学群", departments: ["体育学"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1", notes: "日本最强体育学之一" },
      { name: "芸術専門学群", nameJa: "芸術専門学群", departments: ["芸術学（美术·设计·音乐等）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生入試", ejukRequirements: "日本語+総合科目+数学1", notes: "需要面试+实技考试" },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "30,000〜45,000円（筑波市）",
      monthlyFood: "25,000〜35,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "65,000〜95,000円",
      note: "筑波研究学園都市——生活成本较低。大学宿舍月额15,000〜30,000円，名额较充足。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约310万〜455万円 = 总计约550万〜700万円（4年）",
    internationalStudentQuota: "私費外国人留学生入試：各学群数名〜15名程度。全学留学生約2,200名。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦护照复印件。TISS英語项目另需essay+国际成绩。",
    keyNotes: [
      "筑波大学采用独特的「学群·学類制」而非传统学部制",
      "筑波研究学園都市——42国研机构聚集",
      "体育専門学群是日本最顶尖的体育本科教育",
      "英語本科项目TISS（国际社会科学）可全英文获得学位"
    ],
    dataSources: ["https://ac.tsukuba.ac.jp/en/examinations/", "https://www.tsukuba.ac.jp/en/academics/undergraduate/"],
  },

  {
    universityId: "hiroshima-u",
    universityName: "広島大学",
    type: "national",
    portalUrl: "https://www.hiroshima-u.ac.jp/en/nyugaku",
    admissionSystem: "私費外国人留学生選抜（全学部）+ 英语本科项目（IGS: International Global Studies等）。留学生入试重视EJU成绩+面试。2020年起采用新学部体制。",
    ejuPolicy: "文系：日本語+総合科目+数学1。理系：日本語+数学2+理科。日本語280+为基本。",
    ejuReferenceScores:
      "【文系学部】日本語280+ / 総合科目165+ / 数学1 155+ → 総合600+。【理系学部】日本語280+ / 数学2 165+ / 理科2科 160+ → 総合605+。【情報科学部】日本語290+ / 数学2 175+。【IGS英语本科】TOEFL iBT 80+ / IELTS 6.0+。",
    faculties: [
      { name: "総合科学部", nameJa: "総合科学部", departments: ["総合科学科（人間探求·地域探求·文化探求·社会探求·自然探求領域）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+総合科目+数学1或2" },
      { name: "文学部", nameJa: "文学部", departments: ["人文学科（哲学·歴史学·文学·言語学）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "教育学部", nameJa: "教育学部", departments: ["第一類（学校教育）", "第二類（科学文化教育）", "第三類（言語文化教育）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "法学部", nameJa: "法学部", departments: ["法学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜 + IGS", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "経済学部", nameJa: "経済学部", departments: ["経済学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜 + IGS", ejukRequirements: "日本語+総合科目+数学1" },
      { name: "理学部", nameJa: "理学部", departments: ["数学科", "物理学科", "化学科", "生物科学科", "地球惑星システム学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科（2科目）" },
      { name: "工学部", nameJa: "工学部", departments: ["機械システム工学科", "電気システム情報工学科", "化学工学科", "建築学科", "社会基盤環境工学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科（物理+化学）" },
      { name: "生物生産学部", nameJa: "生物生産学部", departments: ["生物生産学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科（化学+物理/生物）" },
      { name: "医学部", nameJa: "医学部", departments: ["医学科（6年制）", "保健学科（看護·理学療法·作業療法）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科", notes: "留学生枠极少" },
      { name: "歯学部", nameJa: "歯学部", departments: ["歯学科（6年制）"], hasInternationalAdmission: false, admissionType: "一般入试" },
      { name: "薬学部", nameJa: "薬学部", departments: ["薬学科（6年制）", "薬科学科（4年制）"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科（化学+物理/生物）" },
      { name: "情報科学部", nameJa: "情報科学部", departments: ["情報科学科"], hasInternationalAdmission: true, admissionType: "私費外国人留学生選抜", ejukRequirements: "日本語+数学2+理科" },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    livingCosts: {
      monthlyRent: "30,000〜45,000円（東広島市·広島市）",
      monthlyFood: "25,000〜35,000円",
      monthlyUtilities: "10,000〜15,000円",
      monthlyTotal: "65,000〜95,000円",
      note: "広島生活成本较低（约东京55%）。大学宿舍月额15,000〜28,000円。"
    },
    totalFourYearCost: "学费约243万円 + 生活费约310万〜455万円 = 总计约550万〜700万円（4年）",
    internationalStudentQuota: "私費外国人留学生選抜：各学部数名〜10名程度。IGS英语项目：約15名/年。HU-IAAS事前审查必须。",
    applicationDocuments: "①入学願書 ②EJU成绩 ③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦HU-IAAS事前审查结果 ⑧护照复印件。",
    keyNotes: [
      "IGS（International Global Studies）全英文本科项目",
      "HU-IAAS是留学生出愿前必须经过的事前审查系统",
      "2020年体制再编，学部设置与其他国立大不同",
      "WPI-SKCM²项目：学费全免+生活费支给（超优遇）"
    ],
    dataSources: ["https://www.hiroshima-u.ac.jp/en/nyugaku", "https://www.iao.hiroshima-u.ac.jp/"],
  },

  // ============================================================
  // 私立大学 — 2校
  // ============================================================

  {
    universityId: "waseda",
    universityName: "早稻田大学",
    type: "private",
    portalUrl: "https://www.waseda.jp/inst/admission/undergraduate/",
    admissionSystem: "外国人留学生特別選抜（多数学部）+ 英語学位プログラム（SILS国际教养等）。2026年度起教育学部部分学科取消留学生入试（需一般入试）。2028年度起政治経済学部要求JLPT N1。各学部独立出愿·考试。",
    ejuPolicy: "文系学部：日本語+総合科目+数学1。理工学部：日本語+数学2+理科（物理+化学/物理+生物）。各学部分数要求不同，日本語300+为基本。SILS不要求EJU。",
    ejuReferenceScores:
      "【政治経済学部】日本語330+ / 総合180+ / 数学1 180+→総合690+（2028年起N1必须）。【商学部】日本語320+ / 総合180+ / 数学1 175+（人气最高）。【理工学部】日本語300+ / 数学2 180+ / 理科170+ → 総合650+。【SILS】TOEFL iBT 80+ / IELTS 6.5+（不要求EJU）。【教育学部】部分学科取消留学生入试⚠️。",
    faculties: [
      {
        name: "政治経済学部",
        nameJa: "政治経済学部",
        departments: ["政治学科", "経済学科", "国際政治経済学科"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（2028年起要求N1）",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT 70+ / IELTS 5.5+",
        notes: "2028年起必须JLPT N1"
      },
      {
        name: "法学部",
        nameJa: "法学部",
        departments: ["法学科（法律主専攻·政治主専攻·国際関係主専攻）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "商学部",
        nameJa: "商学部",
        departments: ["商学科（経営コース·会計コース·マーケティング·国際ビジネスコース·金融·保険コース）", "国際教養コース（英語学位·GEP）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜 + GEP英语コース",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT 70+ / IELTS 5.5+",
        notes: "人气最高学部之一。GEP全英文経営コース可。経営·会計·金融方向就业率极高。"
      },
      {
        name: "社会科学部",
        nameJa: "社会科学部",
        departments: ["社会科学科（社会科学総合·地域研究·国際社会·政策研究·情報社会）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        notes: "日本少数将社会科学独立为学部的大学。包容所有社会科学分野。"
      },
      {
        name: "国際教養学部 (SILS)",
        nameJa: "国際教養学部",
        departments: ["国際教養学科（全英文授课）", "APM Program（国際経営·経済）"],
        hasInternationalAdmission: true,
        admissionType: "英語選考（不要求EJU·日本語）",
        englishRequirements: "TOEFL iBT 80+ / IELTS 6.5+",
        notes: "最受留学生欢迎的学部之一；全英文授课；约80名/年"
      },
      {
        name: "文化構想学部",
        nameJa: "文化構想学部",
        departments: ["多元文化論系（アジア·欧米·中東·イスラム文化）", "複合文化論系（比較文化·翻訳·映像·言語科学）", "表象·メディア論系（デジタルメディア·映画·ポップカルチャー）", "文芸·ジャーナリズム論系（文学創作·出版·報道·メディア情報）", "現代人間論系（心理学·社会学·カルチュラルスタディーズ）", "社会構築論系（ジェンダー·環境·都市·NGO·社会デザイン）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        notes: "日本特色最鲜明的文系学部之一。6论系制，不同于传统学科制。留学生人气极高。"
      },
      {
        name: "文学部",
        nameJa: "文学部",
        departments: ["哲学コース（哲学·倫理学·美学芸術学）", "東洋哲学コース（中国哲学·インド哲学·仏教学）", "心理学コース（実験心理学·臨床心理学·発達心理学）", "社会学コース（社会学·文化人類学·メディア社会）", "教育学コース（教育学·教育心理学·学校教育）", "日本語日本文学コース", "中国語中国文学コース", "英語英文学コース", "演劇映像コース（演劇学·映像文化·パフォーマンス）", "文芸·ジャーナリズムコース"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        notes: "18のコースを有する大規模文学部。留学生に人気の心理学·社会学コースあり。"
      },
      {
        name: "教育学部",
        nameJa: "教育学部",
        departments: ["教育学科（教育学専攻·教育学·生涯教育学·教育心理学·教育社会学·教育方法学）", "国語国文学科（日文·日本語教育）", "社会科（地理歴史·社会科学·公民教育）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（部分学科取消·需确认）",
        ejukRequirements: "日本語+総合科目+数学1",
        notes: "⚠️ 英語英文学科·理学科·数学科2026年起取消留学生入试。教育学専攻·国語国文学科·社会科保留。"
      },
      {
        name: "人間科学部",
        nameJa: "人間科学部",
        departments: ["人間環境科学科（環境デザイン·都市環境·エコロジー）", "健康福祉科学科（健康科学·社会福祉·臨床心理·公衆衛生）", "人間情報科学科（認知科学·AI·データサイエンス·情報デザイン）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+数学1+理科（3选1）",
        notes: "文理融合型学部。理系入试也可入（数学1+理科）。"
      },
      {
        name: "スポーツ科学部",
        nameJa: "スポーツ科学部",
        departments: ["スポーツ科学科（スポーツ医学·トレーニング科学·スポーツ経営·スポーツ文化）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1或2",
        notes: "日本少有的独立スポーツ科学部。箱根駅伝等运动竞技強豪。"
      },
      {
        name: "基幹理工学部",
        nameJa: "基幹理工学部",
        departments: ["数学科", "応用数理学科（数理モデル·統計科学·計算数理）", "情報理工学科（CS·ソフトウェア·情報ネットワーク）", "機械科学·航空宇宙学科（機械工学·航空宇宙工学·ロボティクス）", "電子物理システム学科（半導体·量子·光エレクトロニクス）", "表現工学科（メディアアート·CG·音響·UI/UX）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（書類選考+面接）",
        ejukRequirements: "日本語+数学2+理科（物理+化学或物理+生物）",
        englishRequirements: "TOEFL iBT / IELTS",
        notes: "早稲田最強の理系学部群の一つ。表現工学科は芸術×工学の融合。情報理工人气最高。"
      },
      {
        name: "創造理工学部",
        nameJa: "創造理工学部",
        departments: ["建築学科（建築デザイン·建築構造·建築環境·都市設計）", "総合機械工学科（設計·生産·システム·人間工学）", "経営システム工学科（IE·OR·経営工学·データ科学）", "社会環境工学科（土木工学·環境工学·都市計画）", "環境資源工学科（資源循環·エネルギー·地球環境·リサイクル工学）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（書類選考+面接）",
        ejukRequirements: "日本語+数学2+理科（物理+化学或物理+生物）",
        englishRequirements: "TOEFL iBT / IELTS",
        notes: "建築学科人气极高（建築家·隈研吾出身校）。経営システム工学科是理工×経営融合。"
      },
      {
        name: "先進理工学部",
        nameJa: "先進理工学部",
        departments: ["物理学科（理論物理·実験物理·宇宙物理）", "応用物理学科（量子科学·ナノテク·光物性）", "化学·生命化学科（物理化学·無機化学·生命化学）", "応用化学科（材料化学·高分子·触媒化学）", "生命医科学科（分子生物学·医用工学·再生医療·創薬科学）", "電気·情報生命工学科（電子デバイス·バイオセンサー·医工情報）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（書類選考+面接）",
        ejukRequirements: "日本語+数学2+理科（物理+化学或化学+生物）",
        englishRequirements: "TOEFL iBT / IELTS",
        notes: "生命医科学科（旧·生命理工）人气最高。最先端研究+医学部並み実験環境。産学連携最多。"
      },

      {
        name: "スポーツ科学部",
        nameJa: "スポーツ科学部",
        departments: ["スポーツ科学科"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1或2"
      },
    ],
    tuitionInfo: { examFee: "35,000円（海外5,000円）", admissionFee: "200,000円", annualTuition: "1,000,000〜1,600,000円（学部不同）" },
    livingCosts: {
      monthlyRent: "55,000〜75,000円（新宿区·豊島区·練馬区）",
      monthlyFood: "35,000〜45,000円",
      monthlyUtilities: "12,000〜18,000円",
      monthlyTotal: "100,000〜140,000円",
      note: "早稲田校区在都心新宿区旁，生活成本同东京。大学宿舍月额40,000〜65,000円。"
    },
    totalFourYearCost: "学费约420万〜660万円 + 生活费约480万〜670万円 = 总计约900万〜1,330万円（4年）",
    internationalStudentQuota: "留学生数日本最多——全学11,727名。各学部均有留学生枠，合格者数非公开。SILS约80名/年。",
    applicationDocuments: "①入学願書 ②EJU成绩（SILS科免除）③TOEFL/IELTS成绩（必须·出願2年内有效）④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書（部分学部）⑦护照复印件 ⑧日本語学校证明（在日者）。",
    keyNotes: [
      "留学生数日本最多——11,727名",
      "教育学部部分学科2026起取消留学生特别入试（教育学专攻、英语英文学科、理学科等）",
      "政治経済学部2028年起必须JLPT N1",
      "SILS国际教养学部全英文可获学位",
      "TOEFL/IELTS必须（出愿2年内有效）"
    ],
    dataSources: ["https://www.waseda.jp/inst/admission/undergraduate/", "https://www.waseda.jp/fpse/pse/en/"],
  },

  {
    universityId: "keio",
    universityName: "庆应义塾大学",
    type: "private",
    portalUrl: "https://www.keio.ac.jp/ja/admissions/undergraduate/",
    admissionSystem: "外国人留学生特別選抜（6学部保留）+ GIGA Program（SFC全英文）。2026年度是SFC（総合政策·環境情報）留学生入试最后一年——2027年起改用综合型选拔（AO）。各学部独立入试。经济学部有英语授课PEARL。",
    ejuPolicy: "文系学部：日本語+総合科目+数学1。理工学部：日本語+数学2+理科（物理+化学）。日本語320+基本。医学部：日本語+数学1+理科（3科目）+ 高い英語力。",
    ejuReferenceScores:
      "【経済学部】日本語330+ / 総合185+ / 数学1 180+ → 総合695+。【PEARL（英语）】TOEFL iBT 90+ / IELTS 6.5+ / SAT 1350+或ACT 28+或IB 36+（不要求EJU）。【理工学部】日本語310+ / 数学2 180+ / 理科170+ → 総合660+。【医学部】日本語350+ / 理科3科185+ / TOEFL 100+（留学生枠1-2人/年）。【SFC】日本語320+ / 总合180+（2026年度最后一年留学生选考⚠️）。",
    faculties: [
      {
        name: "文学部",
        nameJa: "文学部",
        departments: ["人文社会学科·哲学系（哲学·倫理学·美学芸術学）", "史学系（日本史学·東洋史学·西洋史学·民族学考古学）", "文学系（国文学·中国文学·英米文学·独文学·仏文学）", "図書館·情報学系（情報資源管理·デジタルアーカイブ·学術情報）", "人間関係系（社会学·心理学·教育学·人間科学）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS",
        notes: "17の専門分野を5系に統合。三田キャンパスの伝統学部。"
      },
      {
        name: "経済学部",
        nameJa: "経済学部",
        departments: ["経済学科 + PEARL（全英文课程）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜 + PEARL英语选考",
        ejukRequirements: "日本語+総合科目+数学1（通常入试）",
        englishRequirements: "TOEFL iBT 90+ / IELTS 6.5+（PEARL）",
        notes: "PEARL全英文课程不要求EJU/日语"
      },
      {
        name: "法学部",
        nameJa: "法学部",
        departments: ["法律学科", "政治学科"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "商学部",
        nameJa: "商学部",
        departments: ["商学科"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "理工学部",
        nameJa: "理工学部",
        departments: ["機械工学科", "電気情報工学科", "応用化学科", "物理学科", "情報工学科", "生命情報学科", "管理工学科"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（書類審査+面接）",
        ejukRequirements: "日本語+数学2+理科（物理+化学）",
        englishRequirements: "TOEFL iBT 70+ / IELTS 5.5+"
      },
      {
        name: "医学部",
        nameJa: "医学部",
        departments: ["医学科（6年制）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+数学1+理科（3科目：物理+化学+生物）",
        englishRequirements: "TOEFL iBT 100+",
        notes: "留学生枠极少（1-2人/年）"
      },
      {
        name: "総合政策学部（SFC）",
        nameJa: "総合政策学部",
        departments: ["総合政策学科 + GIGA Program（全英文）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（2026年度最后一年！）→ 2027年AO入试",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT 80+ / IELTS 6.0+",
        notes: "⚠️ 2027年起取消留学生特别选考，改为AO入试"
      },
      {
        name: "環境情報学部（SFC）",
        nameJa: "環境情報学部",
        departments: ["環境情報学科 + GIGA Program（全英文）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜（2026年度最后一年！）→ 2027年AO入试",
        ejukRequirements: "日本語+総合科目+数学1",
        englishRequirements: "TOEFL iBT 80+ / IELTS 6.0+",
        notes: "⚠️ 2027年起取消留学生特别选考，改为AO入试"
      },
      {
        name: "薬学部",
        nameJa: "薬学部",
        departments: ["薬学科（6年制）", "薬科学科（4年制）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+数学2+理科（化学+物理/生物）",
        englishRequirements: "TOEFL iBT / IELTS"
      },
      {
        name: "看護医療学部",
        nameJa: "看護医療学部",
        departments: ["看護学科（看護学·公衆衛生看護学·助産学）"],
        hasInternationalAdmission: true,
        admissionType: "外国人留学生特別選抜",
        ejukRequirements: "日本語+数学1+理科（化学·生物中1科）",
        englishRequirements: "TOEFL iBT / IELTS",
        notes: "SFC湘南藤沢キャンパス。看護師·保健師·助産師国家試験受験資格取得可能。"
      },
    ],
    tuitionInfo: { examFee: "17,000円", admissionFee: "200,000円", annualTuition: "1,050,000〜1,700,000円（学部不同）" },
    livingCosts: {
      monthlyRent: "55,000〜75,000円（港区·目黒区·川崎市）",
      monthlyFood: "35,000〜45,000円",
      monthlyUtilities: "12,000〜18,000円",
      monthlyTotal: "100,000〜140,000円",
      note: "三田校区（文系）在港区都心、日吉校区（理工）在横浜市。大学宿舍月额40,000〜65,000円。"
    },
    totalFourYearCost: "学费约440万〜700万円 + 生活费约480万〜670万円 = 总计约920万〜1,370万円（4年）",
    internationalStudentQuota: "私費外国人留学生特別選抜：各学部数名〜15名程度（医学部1-2名/年）。PEARL：約30名/年。GIGA（SFC全英文）：約50名/年。全学留学生約1,800名。",
    applicationDocuments: "①入学願書 ②EJU成绩（PEARL/GIGA免除）③TOEFL/IELTS成绩 ④高中毕业证明+成绩单 ⑤志望理由书 ⑥推薦書 ⑦护照复印件 ⑧SAT/ACT/IB等国际成绩（PEARL推荐）。",
    keyNotes: [
      "2026年度是SFC（综合政策·环境情报）留学生选考最后一年——2027年起AO入试",
      "经济学部PEARL：全英文、不要求EJU/日语",
      "医学部留学生枠极少（1-2人/年）",
      "GIGA Program（SFC全英文）不要求EJU",
      "多数学部不设笔试，書類審査+面接为主"
    ],
    dataSources: ["https://www.keio.ac.jp/ja/admissions/undergraduate/", "https://www.keio.ac.jp/en/admissions/undergraduate/"],
  },
  ...undergraduateAdmissionsSupplement,
];

export const undergraduateExamOverview = {
  title: "日本本科（学部）留学生入试制度总览",
  description: "日本本科面向留学生的入试方式主要有三种。绝大多数留学生通过「外国人留学生特別選抜（EJU利用）」入学。",
  examTypes: [
    {
      name: "外国人留学生特別選抜（EJU利用）",
      description: "最主流路径。提交EJU（日本留学考试·每年6月/11月2次）成绩+英语（TOEFL/TOEIC/IELTS）+申请材料。选考方式通常为書類審査+面接（部分名校有小论文/学力試験）。适用于绝大多数国公立和私立大学的学部。",
      requirements: "EJU日本語+総合科目+数学1（文系）或EJU日本語+数学2+理科2科（理系）。JLPT N1高分是加分项。",
      ejuDates: "每年6月（第1回）、11月（第2回）。成绩有效期2年。"
    },
    {
      name: "英語学位プログラム（English-Taught Programs）",
      description: "全英文授课本科项目，不要求EJU或日语成绩。凭英语成绩（TOEFL/IELTS）+高中成绩+essay申请。适用于早大SILS、庆应PEARL、东北大FGL、京大iUP等。名额极少但无需日语即可获得日本名校本科学位。",
      requirements: "TOEFL iBT 80+ 或 IELTS 6.0+。高中GPA 3.0+。Sat/ACT/IB/A-Level等国际成绩可加分。"
    },
    {
      name: "一般入試（与日本学生同考）",
      description: "与日本学生竞争同一考试名额。需参加「大学入学共通テスト」（日本高考）+大学个别学力試験。难度最高，日语能力要求极高（N1高分段）。部分名校的文系学部不设留学生特别选考（如京大文学部·法学部），只能通过此路径。",
      requirements: "共通テスト所需科目（各大学不同）+ 日语接近母语水平。"
    },
    {
      name: "⚠️ 2026-2027年变动趋势",
      description: "部分大学开始缩小或取消留学生特别选考——2026年度起早大教育学部部分学科取消留学生入试、2027年度起庆应SFC改用AO入试。但大多数名校的多数专业仍保留留学生特别选考，EJU仍是留学生入学的最主要途径。"
    },
  ],
  timeline: {
    title: "本科留学标准时间线",
    steps: [
      "高二（4月-3月）：开始日语学习，目标N3-N2",
      "高三（4月-6月）：JLPT N2以上合格，第1回EJU考试",
      "高三（7月-10月）：第2回EJU考试，准备申请材料",
      "高三（11月-次年2月）：各大学出愿·校内考·面试",
      "高三（次年3月）：合格发表，在留资格申请",
      "次年4月：日本大学入学（或秋季9月/10月入学）"
    ]
  }
};

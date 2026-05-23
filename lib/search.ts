import { vocationalSchools } from "@/data/schools/vocational-schools";
import { languageSchools } from "@/data/schools/language-schools";
import { nationalUniversities, publicUniversities, privateUniversities } from "@/data/schools/universities";
import { services } from "@/data/services";
import type { VocationalSchool } from "@/data/schools/vocational-schools";
import type { LanguageSchool } from "@/data/schools/language-schools";
import type { University } from "@/data/schools/universities";

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: "vocational" | "language" | "university" | "service";
  typeLabel: string;
  href: string;
  snippet: string;
  score: number;
}

interface SearchableItem {
  id: string;
  title: string;
  subtitle: string;
  type: SearchResult["type"];
  typeLabel: string;
  href: string;
  keywords: string[];
}

function buildItems(): SearchableItem[] {
  const items: SearchableItem[] = [];

  for (const s of vocationalSchools) {
    const keywords = [
      s.name, s.nameJa, s.category, s.location, s.highlights,
      ...s.features, ...s.suitableFor,
      ...s.programs.flatMap((p) => [p.name, p.description]),
    ];
    items.push({
      id: s.id,
      title: s.name,
      subtitle: `${s.category} · ${s.location}`,
      type: "vocational",
      typeLabel: "专门学校",
      href: "/services/vocational#" + s.id,
      keywords,
    });
  }

  for (const s of languageSchools) {
    const keywords = [
      s.name, s.nameJa, s.location, s.highlights,
      ...s.features, ...s.suitableFor,
      ...s.programs.flatMap((p) => [p.name, p.description]),
    ];
    items.push({
      id: s.id,
      title: s.name,
      subtitle: `语言学校 · ${s.location}`,
      type: "language",
      typeLabel: "语言学校",
      href: "/services/language-school#" + s.id,
      keywords,
    });
  }

  for (const u of [...nationalUniversities, ...publicUniversities, ...privateUniversities]) {
    const keywords = [
      u.name, u.nameJa, u.location, u.highlights,
      ...u.features, ...u.suitableFor,
      ...u.programs.flatMap((p) => [p.name, p.description, ...p.features]),
    ];
    items.push({
      id: u.id,
      title: u.name,
      subtitle: `${u.type === "national" ? "国公立" : u.type === "public" ? "公立" : "私立"}大学 · ${u.location}`,
      type: "university",
      typeLabel: "大学",
      href: "/services/graduate#" + u.id,
      keywords,
    });
  }

  for (const s of services) {
    const keywords = [
      s.title, s.subtitle, s.description,
      ...s.features,
      ...s.detailSections.flatMap((d) => [d.heading, d.content]),
    ];
    items.push({
      id: s.slug,
      title: s.title,
      subtitle: s.subtitle,
      type: "service",
      typeLabel: "服务",
      href: `/services/${s.slug}`,
      keywords,
    });
  }

  return items;
}

const searchableItems = buildItems();

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[()（）・/／,，\s-]+/g, "")
    .replace(/[ｧ-ﾝﾞﾟ]/g, (c) => {
      // Simple half-width katakana to full-width conversion
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

function getSnippet(keywords: string[], query: string): string {
  const q = normalize(query);
  for (const kw of keywords) {
    const nk = normalize(kw);
    const idx = nk.indexOf(q);
    if (idx !== -1) {
      const start = Math.max(0, idx - 10);
      const end = Math.min(nk.length, idx + q.length + 20);
      let snippet = kw.slice(start, end);
      if (start > 0) snippet = "…" + snippet;
      if (end < kw.length) snippet = snippet + "…";
      return snippet;
    }
  }
  return "";
}

export function searchAll(query: string, limit = 20): SearchResult[] {
  const q = normalize(query).trim();
  if (!q || q.length < 1) return [];

  const scored: SearchResult[] = [];

  for (const item of searchableItems) {
    let bestScore = 0;
    let matchedKeyword = "";

    for (const kw of item.keywords) {
      const nk = normalize(kw);
      if (!nk) continue;

      // Exact match (highest)
      if (nk === q) {
        bestScore = Math.max(bestScore, 100);
        matchedKeyword = kw;
        continue;
      }

      // Prefix match on item title
      if (normalize(item.title) === q) {
        bestScore = Math.max(bestScore, 95);
        matchedKeyword = kw;
        continue;
      }

      // Contains match
      if (nk.includes(q)) {
        const lengthBonus = Math.min(q.length / nk.length, 1) * 10;
        bestScore = Math.max(bestScore, 60 + lengthBonus);
        if (!matchedKeyword) matchedKeyword = kw;
        continue;
      }

      // Substring match (character-by-character for CJK)
      if (q.length >= 2 && nk.includes(q)) {
        bestScore = Math.max(bestScore, 50);
        if (!matchedKeyword) matchedKeyword = kw;
      }
    }

    if (bestScore > 0) {
      const snippet = matchedKeyword ? getSnippet(item.keywords, query) : "";
      scored.push({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        type: item.type,
        typeLabel: item.typeLabel,
        href: item.href,
        snippet,
        score: bestScore,
      });
    }
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

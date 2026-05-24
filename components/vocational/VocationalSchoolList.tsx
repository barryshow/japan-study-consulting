"use client";

import { useState, useEffect, useMemo } from "react";
import { vocationalSchools, type VocationalSchool } from "@/data/schools";
import { VocationalSearchFilter, type VocationalCategoryFilter } from "./VocationalSearchFilter";
import { VocationalSchoolCard } from "./VocationalSchoolCard";

// 领域分类定义（与页面保持一致）
const categories = [
  { key: "IT / 游戏 / 动漫 / 设计", label: "综合型（IT·游戏·动漫·设计）", emoji: "🔷" },
  { key: "IT / 电子 / 动漫", label: "IT·电子·动漫", emoji: "⚡" },
  { key: "动漫 / IT / 设计 / 音乐", label: "动漫·IT·设计·音乐", emoji: "🌟" },
  { key: "IT / 情报处理", label: "IT·情报处理", emoji: "💻" },
  { key: "IT / 游戏 / AI / 设计", label: "IT·游戏·AI·设计", emoji: "🤖" },
  { key: "IT / 通信 / 网络", label: "IT·通信·网络", emoji: "🌐" },
  { key: "动漫 / 动画 / 声优", label: "动漫·动画·声优", emoji: "🎨" },
  { key: "动漫", label: "动漫", emoji: "🎬" },
  { key: "声优 / 演艺 / 动漫 / IT", label: "声优·演艺·IT", emoji: "🎭" },
  { key: "游戏 / 游戏制作 / 电竞", label: "游戏·电竞", emoji: "🎮" },
  { key: "设计 / 建筑 / 室内 / 平面", label: "设计·建筑·室内", emoji: "✏️" },
  { key: "设计 / 时尚 / 美妆", label: "设计·时尚·美妆", emoji: "💄" },
  { key: "时尚 / 设计", label: "时尚·设计", emoji: "👗" },
  { key: "美容 / 美发 / 美妆", label: "美容·美发·美妆", emoji: "💇" },
  { key: "料理 / 甜点", label: "料理·甜点", emoji: "🍳" },
  { key: "商务 / 会计 / 税理士", label: "商务·会计·税理士", emoji: "📊" },
  { key: "商务 / 旅游 / IT / 医疗", label: "商务·旅游·IT·医疗", emoji: "🏢" },
  { key: "IT / 商科 / 设计 / 建筑", label: "IT·商科·设计·建筑", emoji: "🏗️" },
  { key: "外语 / IT / 商科 / 酒店管理", label: "外语·IT·商科·酒店", emoji: "🌍" },
  { key: "理工 / 医疗 / 福祉 / IT", label: "理工·医疗·福祉", emoji: "🏥" },
  { key: "制果 / 甜点 / 面包", label: "制果·甜点·面包", emoji: "🍰" },
  { key: "写真 / 映像 / 放送", label: "写真·映像·放送", emoji: "📷" },
  { key: "建筑 / 土木 / CAD / 设计", label: "建筑·土木·CAD·设计", emoji: "🏛️" },
  { key: "保育 / 幼儿教育 / 福祉", label: "保育·幼儿教育·福祉", emoji: "👶" },
  { key: "自动车 / 整备 / 赛车", label: "自动车·整备·赛车", emoji: "🚗" },
  { key: "音乐 / 音响 / 乐器", label: "音乐·音响·乐器", emoji: "🎵" },
  { key: "旅游 / 酒店 / 航空", label: "旅游·酒店·航空", emoji: "✈️" },
  { key: "动物 / 宠物 / 动物看护", label: "动物·宠物·动物看护", emoji: "🐾" },
  { key: "IT / 设计 / 动漫", label: "IT·设计·动漫", emoji: "🖼️" },
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[()（）・/／,，\s-]+/g, "");
}

export function VocationalSchoolList() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<VocationalCategoryFilter>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // 统计各领域数量
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of vocationalSchools) {
      counts[s.category] = (counts[s.category] || 0) + 1;
    }
    return counts;
  }, []);

  const categoriesWithCount = useMemo(() =>
    categories
      .filter((c) => categoryCounts[c.key] > 0)
      .map((c) => ({ ...c, count: categoryCounts[c.key] })),
  [categoryCounts]);

  // 筛选
  const filteredSchools = useMemo(() => {
    let list = vocationalSchools;

    if (categoryFilter !== "all") {
      list = list.filter((s) => s.category === categoryFilter);
    }

    if (query.trim().length >= 1) {
      const q = normalize(query);
      list = list.filter((s) => {
        const target = normalize(
          s.name + s.nameJa + s.location + s.highlights +
          s.programs.map((p) => p.name + p.description).join(" ") +
          s.features.join(" ") + s.suitableFor.join(" ")
        );
        return target.includes(q);
      });
    }

    return list;
  }, [query, categoryFilter]);

  // 搜索时自动展开
  useEffect(() => {
    if (query.trim().length >= 1) {
      setExpandedIds(new Set(filteredSchools.map((s) => s.id)));
    } else {
      setExpandedIds(new Set());
    }
  }, [query, filteredSchools]);

  // URL hash锚点
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && vocationalSchools.some((s) => s.id === hash)) {
      setExpandedIds((prev) => new Set(prev).add(hash));
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        const el = document.getElementById(hash);
        if (el?.tagName === "DETAILS") (el as HTMLDetailsElement).open = true;
      }, 100);
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-900 text-center">专门学校一览</h2>
        <p className="mt-3 text-center text-zinc-500">
          按领域分类 · 点击展开查看学费、专业、就职等详细信息
        </p>

        {/* 搜索筛选栏 */}
        <div className="mt-6">
          <VocationalSearchFilter
            query={query}
            categoryFilter={categoryFilter}
            resultCount={filteredSchools.length}
            totalCount={vocationalSchools.length}
            categories={categoriesWithCount}
            onQueryChange={setQuery}
            onCategoryFilterChange={setCategoryFilter}
          />
        </div>

        {/* 学校列表 */}
        <div className="mt-4 space-y-2">
          {filteredSchools.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-zinc-400">未找到匹配的专门学校</p>
              <p className="mt-1 text-xs text-zinc-300">试试其他关键词或调整领域筛选</p>
            </div>
          ) : (
            filteredSchools.map((school) => (
              <VocationalSchoolCard
                key={school.id}
                school={school}
                expanded={expandedIds.has(school.id)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
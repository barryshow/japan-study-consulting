"use client";

import { useState, useEffect, useMemo } from "react";
import { getAllUndergraduateUniversities, searchUndergraduateUniversities } from "@/lib/undergraduate-data";
import { GraduateSearchFilter, type UniversityTypeFilter } from "@/components/graduate/GraduateSearchFilter";
import { UndergraduateUniversityCard } from "./UndergraduateUniversityCard";

export function UndergraduateUniversityList() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<UniversityTypeFilter>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const allUniversities = useMemo(() => getAllUndergraduateUniversities(), []);

  const filteredUniversities = useMemo(() => {
    let list = allUniversities;
    if (typeFilter !== "all") {
      list = list.filter((u) => u.type === typeFilter);
    }
    if (query.trim().length >= 1) {
      list = searchUndergraduateUniversities(query, list);
    }
    return list;
  }, [query, typeFilter, allUniversities]);

  useEffect(() => {
    if (query.trim().length >= 1) {
      setExpandedIds(new Set(filteredUniversities.map((u) => u.id)));
    } else {
      setExpandedIds(new Set());
    }
  }, [query, filteredUniversities]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && allUniversities.some((u) => u.id === hash)) {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        next.add(hash);
        return next;
      });
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el?.tagName === "DETAILS") {
          (el as HTMLDetailsElement).open = true;
        }
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [allUniversities]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-900 text-center">各大学 学部·学科·入试详情</h2>
        <p className="mt-3 text-center text-zinc-500">
          数据来源：各大学官网募集要项（2026年采集）· 点击展开查看学部、EJU参考分数与入试情报
        </p>

        <div className="mt-6">
          <GraduateSearchFilter
            query={query}
            typeFilter={typeFilter}
            resultCount={filteredUniversities.length}
            totalCount={allUniversities.length}
            onQueryChange={setQuery}
            onTypeFilterChange={setTypeFilter}
          />
        </div>

        <div className="mt-4 space-y-2">
          {filteredUniversities.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-zinc-400">未找到匹配的大学</p>
              <p className="mt-1 text-xs text-zinc-300">试试其他关键词或调整类型筛选</p>
            </div>
          ) : (
            filteredUniversities.map((uni) => (
              <UndergraduateUniversityCard
                key={uni.id}
                university={uni}
                expanded={expandedIds.has(uni.id)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
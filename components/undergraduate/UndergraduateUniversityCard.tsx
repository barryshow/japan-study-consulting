"use client";

import { type CombinedUndergraduateUniversity } from "@/lib/undergraduate-data";

const typeConfig: Record<string, { label: string; className: string }> = {
  national: { label: "国立", className: "bg-blue-100 text-blue-700" },
  public: { label: "公立", className: "bg-emerald-100 text-emerald-700" },
  private: { label: "私立", className: "bg-amber-100 text-amber-700" },
};

interface Props {
  university: CombinedUndergraduateUniversity;
  expanded?: boolean;
}

export function UndergraduateUniversityCard({ university: uni, expanded }: Props) {
  const tc = typeConfig[uni.type] ?? typeConfig.national;

  return (
    <details
      id={uni.id}
      open={expanded}
      className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors scroll-mt-20"
    >
      {/* ======== 摘要行 ======== */}
      <summary className="cursor-pointer flex items-center gap-3 p-4 select-none">
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${tc.className}`}>
          {tc.label}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-primary-900">{uni.name}</h3>
            <span className="text-xs text-zinc-400">{uni.nameJa}</span>
            {uni.ranking && (
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-500">{uni.ranking}</span>
            )}
            <span className="text-xs text-zinc-300">· {uni.location}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {uni.features.slice(0, 4).map((f) => (
              <span key={f} className="rounded bg-zinc-50 px-1.5 py-0.5 text-[11px] text-zinc-500">{f}</span>
            ))}
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span className="text-xs text-zinc-400">
            {uni.facultyCount}个学部{uni.hasDetail ? " · 入试详情" : ""}
          </span>
          <span className="text-zinc-300 text-sm group-open:hidden">▸</span>
          <span className="text-zinc-300 text-sm hidden group-open:inline">▾</span>
        </div>
      </summary>

      {/* ======== 展开内容 ======== */}
      <div className="px-4 pb-4 border-t border-zinc-100 pt-4 space-y-4">
        <p className="text-sm text-primary-800 font-medium">{uni.highlights}</p>

        {/* 基本条件 */}
        <div className="flex flex-wrap gap-2">
          <Tag>学费：{uni.tuition}</Tag>
          <Tag>日语：{uni.japaneseRequirement}</Tag>
          <Tag>英语：{uni.englishRequirement}</Tag>
          <Tag>GPA：{uni.gpaRequirement}</Tag>
        </div>

        {/* 入试制度 + EJU方针 */}
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-primary-50 p-3">
            <div className="text-xs font-semibold text-primary-800">📝 入试制度</div>
            <p className="mt-1 text-xs text-primary-700 leading-relaxed">{uni.examFormat}</p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="text-xs font-semibold text-zinc-700">🎓 申请途径</div>
            <p className="mt-1 text-xs text-zinc-600">{uni.researchStudent}</p>
          </div>
        </div>

        {uni.sguNote && (
          <div className="rounded-lg bg-amber-50 p-2">
            <p className="text-xs text-amber-700">⚠️ {uni.sguNote}</p>
          </div>
        )}

        {/* ======== 学部详情 ======== */}
        {uni.hasDetail && uni.admissionDetail ? (
          <FacultyAdmissionDetail detail={uni.admissionDetail} />
        ) : (
          <GenericPrograms programs={uni.programs.filter(p => p.level === "undergraduate")} />
        )}

        {uni.website && (
          <a href={uni.website} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-blue-600 hover:underline">
            官网 →
          </a>
        )}
      </div>
    </details>
  );
}

// ============================================================
// 学部入试详情
// ============================================================

function FacultyAdmissionDetail({ detail }: { detail: import("@/data/university-faculties").UndergraduateAdmissionInfo }) {
  return (
    <div className="space-y-4">
      {/* 入试制度 */}
      <div className="rounded-lg bg-zinc-50 p-4">
        <div className="text-sm font-bold text-primary-900 mb-1">入试制度</div>
        <p className="text-xs text-zinc-600 leading-relaxed">{detail.admissionSystem}</p>
      </div>

      {/* EJU 参考分数 */}
      <div className="rounded-lg bg-amber-50 p-4">
        <div className="text-sm font-bold text-amber-800 mb-1">📊 EJU参考合格分数</div>
        <p className="text-xs text-amber-700 leading-relaxed whitespace-pre-line">{detail.ejuReferenceScores}</p>
      </div>

      {/* 学费 & 生活费 */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-zinc-50 p-3">
          <div className="text-xs font-bold text-primary-900 mb-2">学费</div>
          <div className="space-y-1 text-xs text-zinc-600">
            <div className="flex justify-between"><span>检定料</span><strong>{detail.tuitionInfo.examFee}</strong></div>
            <div className="flex justify-between"><span>入学料</span><strong>{detail.tuitionInfo.admissionFee}</strong></div>
            <div className="flex justify-between"><span>年间授业料</span><strong>{detail.tuitionInfo.annualTuition}</strong></div>
          </div>
        </div>
        <div className="rounded-lg bg-zinc-50 p-3">
          <div className="text-xs font-bold text-primary-900 mb-2">月额生活费</div>
          <div className="space-y-1 text-xs text-zinc-600">
            <div className="flex justify-between"><span>住宿</span><strong>{detail.livingCosts.monthlyRent}</strong></div>
            <div className="flex justify-between"><span>饮食</span><strong>{detail.livingCosts.monthlyFood}</strong></div>
            <div className="flex justify-between"><span>光热</span><strong>{detail.livingCosts.monthlyUtilities}</strong></div>
            <div className="flex justify-between border-t border-zinc-200 pt-1 mt-1"><span>月合计</span><strong className="text-primary-900">{detail.livingCosts.monthlyTotal}</strong></div>
          </div>
          <p className="mt-1 text-xs text-zinc-400">{detail.livingCosts.note}</p>
        </div>
      </div>

      {/* 4年总费用 */}
      <div className="rounded-lg bg-primary-50 p-3">
        <div className="text-sm font-bold text-primary-900">💰 本科4年总费用估算</div>
        <p className="mt-1 text-sm text-primary-800 font-semibold">{detail.totalFourYearCost}</p>
      </div>

      {/* 留学生定员 */}
      <div className="rounded-lg bg-zinc-50 p-3">
        <div className="text-xs font-bold text-primary-900 mb-1">留学生定员/合格实绩</div>
        <p className="text-xs text-zinc-600 leading-relaxed">{detail.internationalStudentQuota}</p>
      </div>

      {/* 学部一览 */}
      <div>
        <div className="text-sm font-bold text-primary-900 mb-3">学部/学科一览（{detail.faculties.length}个学部）</div>
        <div className="grid gap-3 sm:grid-cols-2">
          {detail.faculties.map((f) => (
            <div key={f.nameJa} className="rounded-lg bg-zinc-50 p-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h5 className="text-sm font-bold text-primary-900">{f.nameJa}</h5>
                {f.hasInternationalAdmission ? (
                  <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs text-green-700 shrink-0">留学生OK</span>
                ) : (
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-700 shrink-0">一般入試</span>
                )}
              </div>
              <p className="text-xs text-zinc-400 mb-2">{f.name}</p>

              {/* 学科 */}
              <div className="flex flex-wrap gap-1 mb-2">
                {f.departments.map((d) => (
                  <span key={d} className="rounded bg-white px-1.5 py-0.5 text-xs text-zinc-600 border border-zinc-200">{d}</span>
                ))}
              </div>

              {/* 入试 & EJU */}
              <div className="space-y-0.5 text-[11px] text-zinc-600">
                <div><span className="text-zinc-400">入试：</span>{f.admissionType}</div>
                {f.ejukRequirements && (
                  <div><span className="text-zinc-400">EJU：</span>{f.ejukRequirements}</div>
                )}
                {f.ejuScoreReference && (
                  <div><span className="text-amber-700">🎯 目标：{f.ejuScoreReference}</span></div>
                )}
                {f.englishRequirements && (
                  <div><span className="text-zinc-400">英语：</span>{f.englishRequirements}</div>
                )}
                {f.acceptanceRate && (
                  <div><span className="text-zinc-400">竞争度：</span><span className="text-accent-600">{f.acceptanceRate}</span></div>
                )}
              </div>

              {f.notes && (
                <p className="mt-1.5 text-[11px] text-amber-700 bg-amber-50 rounded p-1.5">{f.notes}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 注意事项 */}
      <div>
        <div className="text-sm font-bold text-primary-900">⚠️ 注意事项</div>
        <ul className="mt-1.5 space-y-1">
          {detail.keyNotes.map((n) => (
            <li key={n} className="text-xs text-zinc-600 flex gap-2">
              <span className="text-accent-400 shrink-0">•</span>
              {n}
            </li>
          ))}
        </ul>
      </div>

      {/* 数据来源 */}
      <div>
        <div className="text-xs font-semibold text-zinc-500 mb-1">数据来源</div>
        <ul className="space-y-0.5">
          {detail.dataSources.map((url) => (
            <li key={url} className="text-[11px] text-zinc-400">
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 hover:underline break-all">{url}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ============================================================
// 通用项目回退
// ============================================================

function GenericPrograms({ programs }: { programs: import("@/data/schools/universities").UniversityProgram[] }) {
  if (programs.length === 0) return null;
  return (
    <div>
      <div className="text-sm font-bold text-primary-900 mb-2">学部项目</div>
      <div className="grid gap-2 sm:grid-cols-2">
        {programs.map((p) => (
          <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
            <div className="text-sm font-semibold text-primary-900">{p.name}</div>
            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{p.description}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {p.features.map((f) => (
                <span key={f} className="rounded bg-accent-50 px-1.5 py-0.5 text-xs text-accent-600">{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">{children}</span>;
}
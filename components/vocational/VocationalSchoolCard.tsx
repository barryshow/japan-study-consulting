"use client";

import { type VocationalSchool } from "@/data/schools";

interface Props {
  school: VocationalSchool;
  expanded?: boolean;
}

export function VocationalSchoolCard({ school, expanded }: Props) {
  return (
    <details
      id={school.id}
      open={expanded}
      className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors scroll-mt-20"
    >
      {/* ======== 摘要行 ======== */}
      <summary className="cursor-pointer flex items-center gap-3 p-4 select-none">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-primary-900">{school.name}</h3>
            <span className="text-xs text-zinc-400">{school.nameJa}</span>
            <span className="text-xs text-zinc-300">· {school.location}</span>
          </div>
          {/* 特征标签 */}
          <div className="mt-1 flex flex-wrap gap-1">
            {school.features.slice(0, 4).map((f) => (
              <span key={f} className="rounded bg-zinc-50 px-1.5 py-0.5 text-[11px] text-zinc-500">{f}</span>
            ))}
          </div>
        </div>

        {/* 右侧信息 */}
        <div className="shrink-0 flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-zinc-400">{school.programs.length}个专业</div>
            {school.employmentRate && (
              <div className="text-xs font-medium text-green-600">就业率 {school.employmentRate}</div>
            )}
          </div>
          <span className="text-zinc-300 text-sm group-open:hidden">▸</span>
          <span className="text-zinc-300 text-sm hidden group-open:inline">▾</span>
        </div>
      </summary>

      {/* ======== 展开内容 ======== */}
      <div className="px-4 pb-4 border-t border-zinc-100 pt-4 space-y-4">
        {/* 亮点 */}
        <p className="text-sm text-primary-800 font-medium">{school.highlights}</p>

        {/* 学费详情 */}
        <div className="rounded-lg bg-zinc-50 p-3">
          <div className="text-xs font-semibold text-zinc-700 mb-1.5">💰 学费详情</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            <FeeItem label="入学金" value={school.tuitionBreakdown.enrollmentFee} />
            <FeeItem label="选考料" value={school.tuitionBreakdown.admissionFee} />
            <FeeItem label="年学费" value={school.tuitionBreakdown.annualTuition} />
            <FeeItem label="设施费" value={school.tuitionBreakdown.facilitiesFee} />
            <FeeItem label="实习材料费" value={school.tuitionBreakdown.practiceMaterialsFee} />
            <FeeItem label="初年度合计" value={school.tuitionBreakdown.totalFirstYear} highlight />
          </div>
          <p className="mt-1.5 text-[11px] text-zinc-400">2年总费用：{school.totalTwoYears} · 支付方式：{school.paymentTerm}</p>
        </div>

        {/* 专业一览 */}
        <div>
          <div className="text-sm font-bold text-primary-900 mb-2">专业一览（{school.programs.length}个）</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {school.programs.map((p) => (
              <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
                <div className="flex items-center justify-between gap-1.5 mb-0.5">
                  <span className="text-sm font-semibold text-primary-900">{p.name}</span>
                  <span className="rounded bg-primary-50 px-1.5 py-0.5 text-[10px] text-primary-600 whitespace-nowrap">{p.duration}</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 适合人群 + 就职 */}
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-primary-50 p-3">
            <div className="text-xs font-semibold text-primary-800">🎯 适合人群</div>
            <div className="mt-1 flex flex-wrap gap-1">
              {school.suitableFor.map((s) => (
                <span key={s} className="rounded bg-white px-1.5 py-0.5 text-[11px] text-primary-700">{s}</span>
              ))}
            </div>
          </div>
          {school.employmentRate && (
            <div className="rounded-lg bg-zinc-50 p-3">
              <div className="text-xs font-semibold text-zinc-700">💼 就业实绩（{school.employmentRate}）</div>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{school.employmentRateDetail}</p>
            </div>
          )}
        </div>

        {/* 奖学金 */}
        <div className="rounded-lg bg-primary-50 p-3">
          <div className="text-xs font-semibold text-primary-800">🏆 奖学金</div>
          <ul className="mt-1 space-y-0.5">
            {school.scholarships.map((s) => (
              <li key={s} className="text-[11px] text-primary-700 flex gap-1.5">
                <span className="text-accent-400 shrink-0">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* 学位 + 出勤 */}
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="text-xs font-semibold text-zinc-700">📜 授予学位</div>
            <p className="mt-1 text-xs text-zinc-600">{school.degreeAwarded}</p>
          </div>
          <div className="rounded-lg bg-amber-50 p-3">
            <div className="text-xs font-semibold text-amber-700">⚠️ 出勤要求</div>
            <p className="mt-1 text-xs text-amber-600">{school.attendanceRequirement}</p>
          </div>
        </div>
      </div>
    </details>
  );
}

function FeeItem({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded px-2 py-1 ${highlight ? "bg-primary-100" : "bg-white"}`}>
      <div className="text-[10px] text-zinc-400">{label}</div>
      <div className={`text-xs ${highlight ? "font-bold text-primary-800" : "text-zinc-700"}`}>{value}</div>
    </div>
  );
}
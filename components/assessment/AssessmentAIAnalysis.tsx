"use client";

import { useState } from "react";
import type { AIAnalysisResponse } from "@/app/api/assessment/analyze/route";
import type { StudentForm, ScoreBreakdown, MatchedSchool } from "@/lib/assessment/types";

interface Props {
  studentForm: StudentForm;
  scoreBreakdown: ScoreBreakdown;
  reach: MatchedSchool[];
  match: MatchedSchool[];
  safety: MatchedSchool[];
}

export function AssessmentAIAnalysis({ studentForm, scoreBreakdown, reach, match, safety }: Props) {
  const [result, setResult] = useState<AIAnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buildStudentProfile = (): string => {
    if (studentForm.stage === "undergraduate") {
      const f = studentForm;
      return `申请阶段：学部（本科）
EJU 日语：${f.ejuJapanese ?? "未填写"}  数学：${f.ejuMath ?? "未填写"}  综合/理科：${f.ejuGeneral ?? "未填写"}
日语等级：${f.jlpt === "none" ? "无" : f.jlpt}
英语：${f.englishType !== "none" ? `${f.englishType} ${f.englishScore}` : "无"}
目标专业：${f.targetMajor || "未填写"}
目标地区：${f.targetRegion}
接受私立：${f.acceptPrivate ? "是" : "否"}
预算倾向：${f.budget === "low" ? "低" : f.budget === "medium" ? "中" : f.budget === "high" ? "高" : "不限"}`;
    } else {
      const f = studentForm;
      return `申请阶段：大学院（修士）
本科院校层次：${f.undergradTier === "985" ? "985" : f.undergradTier === "211" ? "211" : f.undergradTier === "double-first-class" ? "双一流" : f.undergradTier === "overseas" ? "海外本科" : f.undergradTier === "college-upgrade" ? "专升本" : f.undergradTier === "regular" ? "普通本科" : "其他"}
GPA/均分：${f.gpa ?? "未填写"}（${f.gpaScale === "4.0" ? "4.0制" : "百分制"}）
本科专业：${f.undergradMajor || "未填写"}
目标研究方向：${f.targetResearch || "未填写"}
日语等级：${f.jlpt === "none" ? "无" : f.jlpt}
英语：${f.englishType !== "none" ? `${f.englishType} ${f.englishScore}` : "无"}
研究计划书：${f.hasResearchProposal ? "已准备" : "未准备"}
论文/科研经历：${f.hasPublications ? "有" : "无"}
目标地区：${f.targetRegion}
接受私立：${f.acceptPrivate ? "是" : "否"}`;
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/assessment/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentProfile: buildStudentProfile(),
          studentScore: scoreBreakdown.total,
          maxScore: scoreBreakdown.maxTotal,
          scoreBreakdown: scoreBreakdown.items,
          reachSchools: reach.map(s => ({ name: s.name, nameJa: s.nameJa, type: s.type, region: s.region, difficultyScore: s.difficultyScore })),
          matchSchools: match.map(s => ({ name: s.name, nameJa: s.nameJa, type: s.type, region: s.region, difficultyScore: s.difficultyScore })),
          safeSchools: safety.map(s => ({ name: s.name, nameJa: s.nameJa, type: s.type, region: s.region, difficultyScore: s.difficultyScore })),
        }),
      });
      const data = await response.json();
      setResult(data);
    } catch {
      setError("AI 分析请求失败，请稍后再试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900">AI 智能分析</h3>
      <p className="mt-1 text-sm text-gray-500">
        基于你的背景信息和冲稳保匹配结果，由 Gemini 生成个性化分析建议。
      </p>

      {!result && !loading && (
        <button
          onClick={handleAnalyze}
          className="mt-4 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-800 transition-colors"
        >
          生成 AI 分析
        </button>
      )}

      {loading && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-600 border-t-transparent" />
          正在生成分析报告...
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3">
          <p className="text-sm text-red-600">{error}</p>
          <button
            onClick={handleAnalyze}
            className="mt-2 text-sm text-primary-600 hover:underline"
          >
            重试
          </button>
        </div>
      )}

      {result && (
        <div className="mt-4 space-y-4">
          {/* 总体评估 */}
          <div className="rounded-lg bg-primary-50 p-4">
            <h4 className="text-sm font-semibold text-primary-800">总体评估</h4>
            <p className="mt-1 text-sm text-primary-700 leading-relaxed">{result.summary}</p>
          </div>

          {/* 优势 */}
          <div>
            <h4 className="text-sm font-semibold text-green-800 mb-2">优势分析</h4>
            <ul className="space-y-1.5">
              {result.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-600 shrink-0 mt-0.5">+</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* 风险 */}
          <div>
            <h4 className="text-sm font-semibold text-orange-800 mb-2">注意事项</h4>
            <ul className="space-y-1.5">
              {result.risks.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-orange-600 shrink-0 mt-0.5">!</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* 下一步建议 */}
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">下一步行动建议</h4>
            <ol className="space-y-1.5">
              {result.nextSteps.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-primary-600 font-medium shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* 免责声明 */}
          <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
            <p className="text-xs text-orange-700 leading-relaxed">{result.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
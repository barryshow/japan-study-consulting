// AI 分析 API — POST /api/assessment/analyze
// 调用 Gemini REST API 生成个性化分析报告
import { NextResponse } from "next/server";

const MODEL = "gemini-2.5-flash-lite";

export interface AIAnalysisRequest {
  stage: "undergraduate" | "graduate";
  major: string;
  targetField: string;
  hasResearchProposal: boolean;
  hasPublications: boolean;
  studentProfile: string;
  studentScore: number;
  maxScore: number;
  scoreBreakdown: { label: string; score: number; maxScore: number; detail: string }[];
  reachSchools: { name: string; nameJa: string; type: string; region: string; difficultyScore: number }[];
  matchSchools: { name: string; nameJa: string; type: string; region: string; difficultyScore: number }[];
  safeSchools: { name: string; nameJa: string; type: string; region: string; difficultyScore: number }[];
}

export interface AIAnalysisResponse {
  summary: string;
  strengths: string[];
  risks: string[];
  nextSteps: string[];
  disclaimer: string;
}

function buildPrompt(req: AIAnalysisRequest): string {
  const stageLabel = req.stage === "graduate" ? "大学院（修士）" : "学部（本科）";
  return `你是一位资深的日本留学顾问。请基于以下学生背景和学校匹配结果，给出个性化的分析建议。注意学生的专业方向，只分析与其专业相关的申请情况。

## 学生背景
${req.studentProfile}

## 申请阶段
${stageLabel}

## 学生专业方向
本科专业/目标专业：${req.major || "未填写"}
目标研究方向/专业方向：${req.targetField || "未填写"}
${req.stage === "graduate" ? `研究计划书：${req.hasResearchProposal ? "已准备" : "未准备"}
论文/科研经历：${req.hasPublications ? "有" : "无"}` : ""}

## 综合评分
${req.studentScore}/${req.maxScore}

## 评分明细
${req.scoreBreakdown.map(i => `- ${i.label}: ${i.score}/${i.maxScore} — ${i.detail}`).join("\n")}

## 冲刺学校（难度高于学生当前背景）
${req.reachSchools.map(s => `- ${s.name}（${s.nameJa}）${s.type === "national" ? "国立" : s.type === "public" ? "公立" : "私立"} · ${s.region} · 难度${s.difficultyScore}`).join("\n") || "（暂无）"}

## 稳妥学校（难度与学生背景相当）
${req.matchSchools.map(s => `- ${s.name}（${s.nameJa}）${s.type === "national" ? "国立" : s.type === "public" ? "公立" : "私立"} · ${s.region} · 难度${s.difficultyScore}`).join("\n") || "（暂无）"}

## 保底学校（难度低于学生背景）
${req.safeSchools.map(s => `- ${s.name}（${s.nameJa}）${s.type === "national" ? "国立" : s.type === "public" ? "公立" : "私立"} · ${s.region} · 难度${s.difficultyScore}`).join("\n") || "（暂无）"}

## 要求
1. 输出纯 JSON 格式，不要 markdown 代码块标记，不要其他文字。
2. JSON 字段：
   - "summary": 一段100-200字的总体评估，针对该生的专业方向分析其申请优劣势
   - "strengths": 数组，列出2-4项该学生的申请优势，必须与其专业方向相关
   - "risks": 数组，列出2-4项需要注意的风险或短板
   - "nextSteps": 数组，列出3-5项具体的下一步行动建议
   - "disclaimer": "以上分析基于通用规则生成，各大学具体入学要求可能随年度调整。请务必以各大学官网公布的最新募集要項为准。本分析不构成录取承诺。"
3. 不允许编造该学生未提供的具体考试分数、GPA、语言成绩等数据。
4. 不允许承诺录取或给出录取概率。
5. 不允许添加冲刺/稳妥/保底名单之外的学校。
6. 分析必须与学生的专业方向匹配。例如理科生推荐理工科方向，文科生推荐人文社科方向。`;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json<AIAnalysisResponse>(
        fallbackAnalysis("API 密钥未配置"),
      );
    }

    const body: AIAnalysisRequest = await request.json();
    const prompt = buildPrompt(body);

    if (prompt.length > 8000) {
      return NextResponse.json<AIAnalysisResponse>(
        fallbackAnalysis("输入内容过长"),
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API error:", res.status, errText);
      return NextResponse.json<AIAnalysisResponse>(
        fallbackAnalysis(`API 返回错误 ${res.status}`),
      );
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json<AIAnalysisResponse>(
        fallbackAnalysis("AI 返回为空"),
      );
    }

    // 清理可能的 markdown 代码块标记
    let cleanText = text.trim();
    if (cleanText.startsWith("```")) {
      cleanText = cleanText.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "").trim();
    }

    let parsed: AIAnalysisResponse;
    try {
      parsed = JSON.parse(cleanText);
    } catch {
      return NextResponse.json<AIAnalysisResponse>(
        fallbackAnalysis("AI 返回格式解析失败"),
      );
    }

    return NextResponse.json(parsed);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "未知错误";
    console.error("Assessment analyze error:", msg);
    return NextResponse.json<AIAnalysisResponse>(
      fallbackAnalysis(msg),
    );
  }
}

function fallbackAnalysis(reason: string): AIAnalysisResponse {
  return {
    summary: `当前无法生成 AI 分析（原因：${reason}）。以下为模板化分析结果。`,
    strengths: [
      "你的背景信息已录入系统",
      "可以根据当前条件开始制定选校策略",
      "建议目标校分布在冲刺/稳妥/保底三个梯队",
    ],
    risks: [
      "未获得 AI 个性化分析，请手动确认各校要求",
      "建议参照学校官网检查最新募集要項",
    ],
    nextSteps: [
      "查阅各目标大学官网的最新募集要項",
      "准备研究计划书/志望理由书",
      "根据各校截止日期制定申请时间表",
      "联系目标教授（大学院申请者）确认招收意向",
    ],
    disclaimer: "以上分析基于通用规则生成，各大学具体入学要求可能随年度调整。请务必以各大学官网公布的最新募集要項为准。本分析不构成录取承诺。",
  };
}
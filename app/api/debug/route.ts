// 调试端点 — 检查环境变量和Gemini连通性
import { NextResponse } from "next/server";

export async function GET() {
  const keyExists = !!process.env.GEMINI_API_KEY;
  const keyPrefix = process.env.GEMINI_API_KEY?.substring(0, 8) || "none";

  // 尝试直接调用Gemini
  let geminiStatus = "未测试";
  let geminiResponse = "";

  if (keyExists) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY!)}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "回复OK" }] }],
          generationConfig: { temperature: 0.1, maxOutputTokens: 50 },
        }),
      });
      geminiStatus = `${res.status}`;
      if (res.ok) {
        const data = await res.json();
        geminiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "(empty)";
      } else {
        geminiResponse = await res.text();
      }
    } catch (e: unknown) {
      geminiStatus = "error";
      geminiResponse = e instanceof Error ? e.message : "unknown error";
    }
  }

  return NextResponse.json({
    env: {
      NODE_ENV: process.env.NODE_ENV,
      keyExists,
      keyPrefix,
    },
    gemini: {
      status: geminiStatus,
      response: geminiResponse,
    },
  });
}
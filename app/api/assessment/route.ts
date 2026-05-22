// 测评结果保存 API —— POST /api/assessment
import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rnfmlfstiwzwzsnfgehb.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_VXQPIy8x58Pq3ocuxFAmpQ_j6lVv4u6";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(`${SUPABASE_URL}/rest/v1/Assessment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: `数据库错误(${res.status}): ${err}` }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "未知错误";
    return NextResponse.json({ error: `服务器错误: ${msg}` }, { status: 500 });
  }
}
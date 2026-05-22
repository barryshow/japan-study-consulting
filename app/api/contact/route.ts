// 联系表单提交 API —— POST /api/contact
import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rnfmlfstiwzwzsnfgehb.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_VXQPIy8x58Pq3ocuxFAmpQ_j6lVv4u6";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, wechat, interest, notes } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "姓名和手机号为必填" }, { status: 400 });
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, phone, wechat, interest, notes }),
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
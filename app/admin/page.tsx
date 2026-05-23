"use client";

import { useState, useEffect } from "react";

const SUPABASE_URL = "https://rnfmlfstiwzwzsnfgehb.supabase.co";
const SUPABASE_KEY = "sb_publishable_VXQPIy8x58Pq3ocuxFAmpQ_j6lVv4u6";
const PASSWORD = "ruipu2024";

interface Contact {
  id: number;
  name: string;
  phone: string;
  wechat: string | null;
  interest: string | null;
  notes: string | null;
  createdAt: string;
}

interface Assessment {
  id: number;
  stage: string;
  jlpt: string | null;
  targetRegion: string | null;
  totalScore: number | null;
  resultJson: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"contacts" | "assessments" | "schools">("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(false);
  const [seedStatus, setSeedStatus] = useState("");

  function login() {
    if (password === PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("密码错误");
    }
  }

  useEffect(() => {
    if (!authenticated) return;
    fetchData();
  }, [authenticated, tab]);

  async function fetchData() {
    setLoading(true);
    try {
      let table = tab === "contacts" ? "Contact" : "Assessment";
      let select = tab === "contacts"
        ? "id,name,phone,wechat,interest,notes,createdAt"
        : "id,stage,jlpt,targetRegion,totalScore,resultJson,createdAt";
      let order = "createdAt.desc";
      let limit = tab === "assessments" ? "50" : "100";

      const url = `${SUPABASE_URL}/rest/v1/${table}?select=${select}&order=${order}&limit=${limit}`;
      const res = await fetch(url, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      });

      if (res.ok) {
        const data = await res.json();
        if (tab === "contacts") setContacts(data);
        else setAssessments(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function runSeed() {
    setSeedStatus("正在导入，请稍候...（约1-2分钟）");
    try {
      const res = await fetch("/api/seed");
      const data = await res.json();
      if (data.success) {
        setSeedStatus(`导入完成！\n${data.logs.slice(-5).join("\n")}`);
      } else {
        setSeedStatus(`失败：${data.error}`);
      }
    } catch (e) {
      setSeedStatus(`网络错误: ${e}`);
    }
  }

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-sm">
          <h1 className="mb-6 text-center text-xl font-bold">管理后台</h1>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && login()}
            placeholder="请输入密码"
            className="mb-3 w-full rounded-lg border px-4 py-3 text-center"
          />
          {error && <p className="mb-3 text-center text-sm text-red-500">{error}</p>}
          <button onClick={login} className="w-full rounded-lg bg-zinc-800 py-3 text-white hover:bg-zinc-700">
            登录
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">管理后台</h1>
          <span className="text-sm text-zinc-400">
            {tab === "contacts" ? `${contacts.length} 条咨询` : `${assessments.length} 条测评`}
          </span>
        </div>

        {/* 标签切换 */}
        <div className="mb-6 flex gap-2">
          {(["contacts", "assessments", "schools"] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                tab === t ? "bg-zinc-800 text-white" : "bg-white text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              {{ contacts: "咨询列表", assessments: "测评记录", schools: "学校数据" }[t]}
            </button>
          ))}
        </div>

        {loading && <p className="py-8 text-center text-zinc-400">加载中...</p>}

        {/* 咨询列表 */}
        {!loading && tab === "contacts" && (
          <div className="space-y-3">
            {contacts.map(c => (
              <div key={c.id} className="rounded-lg bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-medium">{c.name}</span>
                    <span className="ml-3 text-zinc-500">{c.phone}</span>
                    {c.wechat && <span className="ml-3 text-zinc-400">微信: {c.wechat}</span>}
                  </div>
                  <span className="text-xs text-zinc-400">{new Date(c.createdAt).toLocaleString("zh-CN")}</span>
                </div>
                <div className="mt-2 flex gap-4 text-sm">
                  {c.interest && <span className="rounded bg-zinc-100 px-2 py-0.5">{c.interest}</span>}
                  {c.notes && <span className="flex-1 text-zinc-500">{c.notes}</span>}
                </div>
              </div>
            ))}
            {contacts.length === 0 && <p className="py-8 text-center text-zinc-400">暂无咨询记录</p>}
          </div>
        )}

        {/* 测评记录 */}
        {!loading && tab === "assessments" && (
          <div className="space-y-3">
            {assessments.map(a => (
              <div key={a.id} className="rounded-lg bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-medium">{a.stage === "undergraduate" ? "本科测评" : "大学院测评"}</span>
                    <span className="ml-3 text-sm text-zinc-500">
                      {a.jlpt && `JLPT ${a.jlpt}`}
                      {a.targetRegion && ` · ${a.targetRegion}`}
                    </span>
                    {a.totalScore != null && (
                      <span className="ml-3 rounded bg-primary-50 px-2 py-0.5 text-sm font-medium text-primary-700">
                        {a.totalScore}分
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400">{new Date(a.createdAt).toLocaleString("zh-CN")}</span>
                </div>
                {a.resultJson && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-zinc-500">查看匹配结果</summary>
                    <pre className="mt-2 max-h-64 overflow-auto rounded bg-zinc-50 p-3 text-xs">
                      {JSON.stringify(JSON.parse(a.resultJson), null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))}
            {assessments.length === 0 && <p className="py-8 text-center text-zinc-400">暂无测评记录</p>}
          </div>
        )}

        {/* 学校数据导入 */}
        {!loading && tab === "schools" && (
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">学校数据导入</h2>
            <p className="mb-4 text-sm text-zinc-500">
              将静态数据文件中的学校信息导入到 Supabase 数据库。首次部署时需要运行一次。
            </p>
            <button
              onClick={runSeed}
              disabled={seedStatus.includes("正在导入")}
              className="rounded-lg bg-primary-700 px-6 py-3 text-white hover:bg-primary-800 disabled:opacity-50"
            >
              {seedStatus.includes("正在导入") ? "导入中..." : "开始导入学校数据"}
            </button>
            {seedStatus && <pre className="mt-4 rounded bg-zinc-50 p-4 text-sm text-zinc-600">{seedStatus}</pre>}
          </div>
        )}
      </div>
    </div>
  );
}
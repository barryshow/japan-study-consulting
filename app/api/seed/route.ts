// 学校数据导入 API —— 访问 /api/seed 来导入
import { NextResponse } from "next/server";
import { languageSchools } from "@/data/schools/language-schools";
import { nationalUniversities, publicUniversities, privateUniversities } from "@/data/schools/universities";
import { vocationalSchools } from "@/data/schools/vocational-schools";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rnfmlfstiwzwzsnfgehb.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_VXQPIy8x58Pq3ocuxFAmpQ_j6lVv4u6";

async function pushToTable(table: string, rows: unknown[]) {
  const results: string[] = [];
  for (const row of rows) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      const err = await res.text();
      results.push(`✗ ${(row as Record<string,string>).name || "unknown"}: ${res.status} ${err}`);
    } else {
      results.push(`✓ ${(row as Record<string,string>).name}`);
    }
  }
  return results;
}

export async function GET() {
  const logs: string[] = [];
  const allUniversities = [...nationalUniversities, ...publicUniversities, ...privateUniversities];

  try {
    // 导入语言学校
    const langRows = languageSchools.map(s => ({
      slug: s.id,
      name: s.name,
      nameJa: s.nameJa,
      location: s.location,
      tuition: s.tuition,
      paymentTerm: s.paymentTerm,
      attendanceRequirement: s.attendanceRequirement,
      duration: s.duration,
      visaRequirement: s.visaRequirement,
      minimumStudyForVocational: s.minimumStudyForVocational,
      intake: s.intake,
      highlights: s.highlights,
      website: s.website || null,
      featuresJson: s.features,
      programsJson: s.programs,
      tuitionBreakdownJson: s.tuitionBreakdown,
      suitableForJson: s.suitableFor,
    }));

    logs.push(`--- 语言学校 (${langRows.length}所) ---`);
    const langResults = await pushToTable("LanguageSchool", langRows);
    logs.push(...langResults);

    // 导入大学
    const uniRows = allUniversities.map(u => ({
      slug: u.id,
      name: u.name,
      nameJa: u.nameJa,
      type: u.type,
      ranking: u.ranking || null,
      location: u.location,
      tuition: u.tuition,
      gpaRequirement: u.gpaRequirement,
      japaneseRequirement: u.japaneseRequirement,
      englishRequirement: u.englishRequirement,
      highlights: u.highlights,
      researchStudent: u.researchStudent,
      examFormat: u.examFormat,
      sguNote: u.sguNote || null,
      website: u.website || null,
      featuresJson: u.features,
      programsJson: u.programs,
      suitableForJson: u.suitableFor,
    }));

    logs.push(`\n--- 大学 (${uniRows.length}所) ---`);
    const uniResults = await pushToTable("University", uniRows);
    logs.push(...uniResults);

    // 导入专门学校
    const vocRows = vocationalSchools.map(s => ({
      slug: s.id,
      name: s.name,
      nameJa: s.nameJa,
      category: s.category,
      location: s.location,
      tuition: s.tuition,
      totalTwoYears: s.totalTwoYears,
      highlights: s.highlights,
      employmentRate: s.employmentRate || null,
      employmentRateDetail: s.employmentRateDetail,
      paymentTerm: s.paymentTerm,
      degreeAwarded: s.degreeAwarded,
      attendanceRequirement: s.attendanceRequirement,
      featuresJson: s.features,
      programsJson: s.programs,
      tuitionBreakdownJson: s.tuitionBreakdown,
      suitableForJson: s.suitableFor,
      scholarshipsJson: s.scholarships,
    }));

    logs.push(`\n--- 专门学校 (${vocRows.length}所) ---`);
    const vocResults = await pushToTable("VocationalSchool", vocRows);
    logs.push(...vocResults);

    logs.push(`\n✅ 全部导入完成！`);

    return NextResponse.json({ success: true, logs });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "未知错误";
    return NextResponse.json({ error: msg, logs }, { status: 500 });
  }
}
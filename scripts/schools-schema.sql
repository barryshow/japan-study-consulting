-- 语言学校表
CREATE TABLE IF NOT EXISTS "LanguageSchool" (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "nameJa" TEXT,
  "location" TEXT,
  tuition TEXT,
  "paymentTerm" TEXT,
  "attendanceRequirement" TEXT,
  duration TEXT,
  "visaRequirement" TEXT,
  "minimumStudyForVocational" TEXT,
  intake TEXT,
  highlights TEXT,
  website TEXT,
  "featuresJson" JSONB,
  "programsJson" JSONB,
  "tuitionBreakdownJson" JSONB,
  "suitableForJson" JSONB,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 大学表
CREATE TABLE IF NOT EXISTS "University" (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "nameJa" TEXT,
  "type" TEXT,
  ranking TEXT,
  "location" TEXT,
  tuition TEXT,
  "gpaRequirement" TEXT,
  "japaneseRequirement" TEXT,
  "englishRequirement" TEXT,
  highlights TEXT,
  "researchStudent" TEXT,
  "examFormat" TEXT,
  "sguNote" TEXT,
  website TEXT,
  "featuresJson" JSONB,
  "programsJson" JSONB,
  "suitableForJson" JSONB,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 专门学校表
CREATE TABLE IF NOT EXISTS "VocationalSchool" (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "nameJa" TEXT,
  category TEXT,
  "location" TEXT,
  tuition TEXT,
  "totalTwoYears" TEXT,
  highlights TEXT,
  "employmentRate" TEXT,
  "employmentRateDetail" TEXT,
  "paymentTerm" TEXT,
  "degreeAwarded" TEXT,
  "attendanceRequirement" TEXT,
  "featuresJson" JSONB,
  "programsJson" JSONB,
  "tuitionBreakdownJson" JSONB,
  "suitableForJson" JSONB,
  "scholarshipsJson" JSONB,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 允许写入
ALTER TABLE "LanguageSchool" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow_public_insert_language" ON "LanguageSchool" FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_public_read_language" ON "LanguageSchool" FOR SELECT USING (true);

ALTER TABLE "University" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow_public_insert_university" ON "University" FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_public_read_university" ON "University" FOR SELECT USING (true);

ALTER TABLE "VocationalSchool" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow_public_insert_vocational" ON "VocationalSchool" FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_public_read_vocational" ON "VocationalSchool" FOR SELECT USING (true);

-- 允许公开读取 Contact 和 Assessment（管理后台用）
CREATE POLICY "allow_public_read_contact" ON "Contact" FOR SELECT USING (true);
CREATE POLICY "allow_public_read_assessment" ON "Assessment" FOR SELECT USING (true);
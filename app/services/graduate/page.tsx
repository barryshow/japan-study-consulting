import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SchoolListSection } from "@/components/shared/SchoolListSection";
import { GraduateAdmissionDetail } from "@/components/shared/GraduateAdmissionDetail";
import { services } from "@/data/services";
import { nationalUniversities, privateUniversities } from "@/data/schools";

export default function GraduatePage() {
  const service = services.find((s) => s.slug === "graduate")!;

  return (
    <>
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "留学服务", href: "/services" },
              { label: service.title },
            ]}
            className="mb-4"
          />
          <div className="max-w-3xl">
            <div className="mb-4 text-5xl">{service.icon}</div>
            <h1 className="text-4xl font-bold text-primary-900">{service.title}</h1>
            <p className="mt-2 text-xl text-zinc-500">{service.subtitle}</p>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">{service.description}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="服务亮点" centered={false} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feat) => (
              <div key={feat} className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4">
                <span className="text-accent-400 text-xl">✓</span>
                <span className="font-medium text-primary-900">{feat}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {service.detailSections.map((section, i) => (
        <section key={section.heading} className={`py-12 ${i % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-primary-900">{section.heading}</h2>
              <div className="mt-4 text-zinc-600 leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          </Container>
        </section>
      ))}

      {/* 申请指南入口 */}
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">📘</div>
            <h2 className="text-2xl font-bold text-primary-900">大学院申请全流程指南</h2>
            <p className="mt-3 text-zinc-600">
              四条申请路径详解 · 研究计划书写作指导 · 教授套词策略与邮件模板 · 完整申请时间线
            </p>
            <Button href="/services/graduate/guide" size="lg" className="mt-6">
              查看完整指南 →
            </Button>
          </div>
        </Container>
      </section>

      <SchoolListSection
        title="国公立大学院"
        subtitle="日本顶尖国立大学院，学费统一，科研实力雄厚"
      >
        {nationalUniversities.map((uni) => (
          <div key={uni.id} id={uni.id} className="rounded-xl border border-zinc-200 bg-white p-6 scroll-mt-20">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-primary-900">{uni.name}</h3>
              <span className="shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">{uni.ranking}</span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">{uni.nameJa} · {uni.location}</p>
            <p className="mt-3 text-sm text-primary-800 font-medium">{uni.highlights}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">学费：{uni.tuition}</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">日语：{uni.japaneseRequirement}</span>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-3">
              <div className="text-xs font-semibold text-primary-800">📝 一般入试</div>
              <p className="mt-1 text-xs text-primary-700 leading-relaxed">{uni.examFormat}</p>
            </div>
            <div className="mt-2 rounded-lg bg-zinc-50 p-3">
              <div className="text-xs font-semibold text-zinc-700">🔬 研究生（预科·旁听）制度</div>
              <p className="mt-1 text-xs text-zinc-600">{uni.researchStudent}</p>
            </div>
            {uni.sguNote && (
              <div className="mt-2 rounded-lg bg-amber-50 p-2">
                <p className="text-xs text-amber-700">⚠️ {uni.sguNote}</p>
              </div>
            )}
            <div className="mt-4 space-y-2">
              {uni.programs.filter(p => p.level === "graduate").slice(0, 3).map((p) => (
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
              {uni.programs.filter(p => p.level === "graduate").length > 3 && (
                <p className="text-xs text-zinc-400 text-center mt-1">
                  还有 {uni.programs.filter(p => p.level === "graduate").length - 3} 个项目，详见下方展开区
                </p>
              )}
            </div>
          </div>
        ))}
      </SchoolListSection>

      <SchoolListSection
        title="私立名门大学院"
        subtitle="国际化程度高，就职支援强大，留学生规模大"
      >
        {privateUniversities.map((uni) => (
          <div key={uni.id} id={uni.id} className="rounded-xl border border-zinc-200 bg-white p-6 scroll-mt-20">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-primary-900">{uni.name}</h3>
              <span className="shrink-0 rounded-full bg-accent-100 px-2 py-0.5 text-xs font-medium text-accent-600">{uni.ranking}</span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">{uni.nameJa} · {uni.location}</p>
            <p className="mt-3 text-sm text-primary-800 font-medium">{uni.highlights}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">学费：{uni.tuition}</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">日语：{uni.japaneseRequirement}</span>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-3">
              <div className="text-xs font-semibold text-primary-800">📝 一般入试</div>
              <p className="mt-1 text-xs text-primary-700 leading-relaxed">{uni.examFormat}</p>
            </div>
            <div className="mt-2 rounded-lg bg-zinc-50 p-3">
              <div className="text-xs font-semibold text-zinc-700">🔬 研究生（预科·旁听）制度</div>
              <p className="mt-1 text-xs text-zinc-600">{uni.researchStudent}</p>
            </div>
            {uni.sguNote && (
              <div className="mt-2 rounded-lg bg-amber-50 p-2">
                <p className="text-xs text-amber-700">⚠️ {uni.sguNote}</p>
              </div>
            )}
            <div className="mt-4 space-y-2">
              {uni.programs.filter(p => p.level === "graduate").slice(0, 3).map((p) => (
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
              {uni.programs.filter(p => p.level === "graduate").length > 3 && (
                <p className="text-xs text-zinc-400 text-center mt-1">
                  还有 {uni.programs.filter(p => p.level === "graduate").length - 3} 个项目，详见下方展开区
                </p>
              )}
            </div>
          </div>
        ))}
      </SchoolListSection>

      <GraduateAdmissionDetail />

      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">准备申请日本大学院？</h2>
            <p className="mt-3 text-primary-100">免费评估你的背景，制定最优申请策略</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              免费评估
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

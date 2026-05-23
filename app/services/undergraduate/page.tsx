import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { UndergraduateUniversityList } from "@/components/undergraduate/UndergraduateUniversityList";
import { services } from "@/data/services";
import { undergraduateExamOverview } from "@/data/university-faculties";

export default function UndergraduatePage() {
  const service = services.find((s) => s.slug === "undergraduate")!;

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
              <p className="mt-4 text-zinc-600 leading-relaxed">{section.content}</p>
            </div>
          </Container>
        </section>
      ))}

      {/* 统一本科大学列表 — 搜索筛选 + 学部·入试详情 */}
      <UndergraduateUniversityList />

      {/* ======== 入试制度总览 ======== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl bg-primary-50 p-8">
            <h3 className="text-xl font-bold text-primary-900">{undergraduateExamOverview.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{undergraduateExamOverview.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {undergraduateExamOverview.examTypes.map((exam) => (
                <div key={exam.name} className="rounded-lg bg-white p-4 border border-zinc-200">
                  <h4 className="text-sm font-bold text-primary-900">{exam.name}</h4>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{exam.description}</p>
                  {exam.requirements && (
                    <div className="mt-2 rounded bg-zinc-50 p-2">
                      <p className="text-xs text-zinc-500"><span className="font-semibold">要求：</span>{exam.requirements}</p>
                    </div>
                  )}
                  {exam.ejuDates && (
                    <p className="mt-1 text-xs text-zinc-400">{exam.ejuDates}</p>
                  )}
                </div>
              ))}
            </div>

            {undergraduateExamOverview.timeline && (
              <div className="mt-8">
                <h4 className="text-lg font-bold text-primary-900">{undergraduateExamOverview.timeline.title}</h4>
                <div className="mt-4 space-y-3">
                  {undergraduateExamOverview.timeline.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">{i + 1}</span>
                      <span className="text-sm text-zinc-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">想去日本读本科？</h2>
            <p className="mt-3 text-primary-100">从高中到日本名校，我们帮你走好每一步</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              免费规划
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

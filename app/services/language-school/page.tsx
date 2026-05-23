import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SchoolListSection } from "@/components/shared/SchoolListSection";
import { services } from "@/data/services";
import { languageSchools } from "@/data/schools";

export default function LanguageSchoolPage() {
  const service = services.find((s) => s.slug === "language-school")!;

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

      <SchoolListSection
        title="合作语言学校一览"
        subtitle="精选日本优良校，均为入管局认定优良校，签证通过率高"
      >
        {languageSchools.map((school) => (
          <div key={school.id} id={school.id} className="rounded-xl border border-zinc-200 bg-white p-6 scroll-mt-20">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary-900">{school.name}</h3>
                <p className="text-sm text-zinc-500">{school.nameJa}</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-600">
                优良校
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-500">📍 {school.location}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">学费：{school.tuition}</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">入学：{school.intake}</span>
            </div>
            <p className="mt-3 text-sm font-medium text-primary-800">{school.highlights}</p>
            <div className="mt-3 space-y-2">
              {school.programs.slice(0, 2).map((p) => (
                <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
                  <div className="text-sm font-semibold text-primary-900">{p.name}</div>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
            <ul className="mt-3 space-y-1">
              {school.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <span className="h-1 w-1 rounded-full bg-accent-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </SchoolListSection>

      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">开始你的语言学校申请</h2>
            <p className="mt-3 text-primary-100">免费咨询，获取专属选校建议</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              立即咨询
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

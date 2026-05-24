import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { VocationalSchoolList } from "@/components/vocational/VocationalSchoolList";
import { vocationalSchools } from "@/data/schools";

export default function VocationalPage() {
  const service = services.find((s) => s.slug === "vocational")!;

  // 统计领域
  const categories = [...new Set(vocationalSchools.map((s) => s.category))];

  return (
    <>
      {/* 标题区 */}
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

      {/* 服务亮点 */}
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

      {/* 路径说明 */}
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

      {/* 按领域分类的目录（与大学院页面对齐） */}
      <section className="py-16 bg-zinc-50">
        <Container>
          <SectionTitle title="按领域浏览专门学校" subtitle={`共 ${categories.length} 个领域 · ${vocationalSchools.length} 所学校 · 点击展开查看详情`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat) => {
              const schools = vocationalSchools.filter((s) => s.category === cat);
              return (
                <details key={cat} className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors">
                  <summary className="cursor-pointer p-4 select-none flex items-center gap-2">
                    <span className="text-xl">{cat.split(" / ")[0] === "IT" ? "💻" : cat.includes("动漫") ? "🎨" : cat.includes("料理") ? "🍳" : cat.includes("美容") ? "💄" : cat.includes("商务") ? "📊" : cat.includes("设计") ? "✏️" : cat.includes("游戏") ? "🎮" : cat.includes("声优") ? "🎭" : cat.includes("时尚") ? "👗" : cat.includes("音乐") ? "🎵" : cat.includes("动物") ? "🐾" : cat.includes("自动车") ? "🚗" : cat.includes("保育") ? "👶" : cat.includes("建筑") ? "🏛️" : cat.includes("写真") ? "📷" : cat.includes("制果") ? "🍰" : cat.includes("理工") ? "🏥" : cat.includes("外语") ? "🌍" : cat.includes("旅游") ? "✈️" : "📌"}</span>
                    <span className="text-sm font-bold text-primary-900">{cat}</span>
                    <span className="text-xs text-zinc-400 ml-auto">{schools.length}所学校</span>
                  </summary>
                  <div className="px-4 pb-4 border-t border-zinc-100 pt-3 space-y-2 max-h-64 overflow-y-auto">
                    {schools.map((school) => (
                      <a
                        key={school.id}
                        href={`#${school.id}`}
                        className="block rounded-lg hover:bg-primary-50 p-2 -mx-2 transition-colors"
                      >
                        <div className="text-xs text-primary-600 font-medium">{school.name}</div>
                        <div className="text-sm font-semibold text-zinc-800">{school.nameJa}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{school.location} · {school.programs.length}个专业</div>
                      </a>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 统一专门学校列表 — 搜索筛选 + 详情 */}
      <VocationalSchoolList />

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">对专门学校感兴趣？</h2>
            <p className="mt-3 text-primary-100">2年掌握实用技能，高就职率保障未来</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              了解更多
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
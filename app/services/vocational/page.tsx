import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { vocationalSchools } from "@/data/schools";

// 按领域分门别类
const categories = [
  // IT·游戏·动漫·设计
  { key: "IT / 游戏 / 动漫 / 设计", label: "IT·游戏·动漫·设计（综合型）", emoji: "🔷" },
  { key: "IT / 电子 / 动漫", label: "IT·电子·动漫", emoji: "⚡" },
  { key: "动漫 / IT / 设计 / 音乐", label: "动漫·IT·设计·音乐（综合型）", emoji: "🌟" },
  { key: "IT / 情报处理", label: "IT·情报处理", emoji: "💻" },
  { key: "IT / 游戏 / AI / 设计", label: "IT·游戏·AI·设计（福冈）", emoji: "🤖" },
  { key: "IT / 通信 / 网络", label: "IT·通信·网络", emoji: "🌐" },
  // 动漫·动画·声优
  { key: "动漫 / 动画 / 声优", label: "动漫·动画·声优", emoji: "🎨" },
  { key: "动漫", label: "动漫", emoji: "🎬" },
  { key: "声优 / 演艺 / 动漫 / IT", label: "声优·演艺·IT（综合型）", emoji: "🎭" },
  // 游戏
  { key: "游戏 / 游戏制作 / 电竞", label: "游戏·电竞", emoji: "🎮" },
  // 设计·建筑·时尚
  { key: "设计 / 建筑 / 室内 / 平面", label: "设计·建筑·室内", emoji: "✏️" },
  { key: "设计 / 时尚 / 美妆", label: "设计·时尚·美妆", emoji: "💄" },
  { key: "时尚 / 设计", label: "时尚·设计", emoji: "👗" },
  // 美容
  { key: "美容 / 美发 / 美妆", label: "美容·美发·美妆", emoji: "💇" },
  // 料理
  { key: "料理 / 甜点", label: "料理·甜点", emoji: "🍳" },
  // 商务
  { key: "商务 / 会计 / 税理士", label: "商务·会计·税理士", emoji: "📊" },
  { key: "商务 / 旅游 / IT / 医疗", label: "商务·旅游·IT·医疗（骏台）", emoji: "🏢" },
  { key: "IT / 商科 / 设计 / 建筑", label: "IT·商科·设计·建筑（麻生）", emoji: "🏗️" },
  // 外语 / IT / 商科
  { key: "外语 / IT / 商科 / 酒店管理", label: "外语·IT·商科·酒店（ECC）", emoji: "🌍" },
  // 理工 / 医疗 / 福祉
  { key: "理工 / 医疗 / 福祉 / IT", label: "理工·医疗·福祉（读卖）", emoji: "🏥" },
  // 制果 / 甜点 / 面包
  { key: "制果 / 甜点 / 面包", label: "制果·甜点·面包", emoji: "🍰" },
  // 写真 / 映像 / 放送
  { key: "写真 / 映像 / 放送", label: "写真·映像·放送", emoji: "📷" },
  // 建筑 / 土木 / CAD
  { key: "建筑 / 土木 / CAD / 设计", label: "建筑·土木·CAD·设计（中央工）", emoji: "🏛️" },
  // 保育 / 幼儿教育
  { key: "保育 / 幼儿教育 / 福祉", label: "保育·幼儿教育·福祉", emoji: "👶" },
  // 自动车
  { key: "自动车 / 整备 / 赛车", label: "自动车·整备·赛车", emoji: "🚗" },
  // 音乐
  { key: "音乐 / 音响 / 乐器", label: "音乐·音响·乐器", emoji: "🎵" },
  // 旅游·酒店·航空
  { key: "旅游 / 酒店 / 航空", label: "旅游·酒店·航空", emoji: "✈️" },
  // 动物
  { key: "动物 / 宠物 / 动物看护", label: "动物·宠物·动物看护", emoji: "🐾" },
  // IT / 设计
  { key: "IT / 设计 / 动漫", label: "IT·设计·动漫", emoji: "🖼️" },
];

const categoryOrder = categories.map((c) => c.key);

// Group schools by their primary category
const grouped = new Map<string, typeof vocationalSchools>();
for (const school of vocationalSchools) {
  const primaryCategory = school.category;
  if (!grouped.has(primaryCategory)) {
    grouped.set(primaryCategory, []);
  }
  grouped.get(primaryCategory)!.push(school);
}

// Sort categories in the defined order, unknown ones go last
const sortedCategories = [...grouped.entries()].sort(([a], [b]) => {
  const ai = categoryOrder.indexOf(a);
  const bi = categoryOrder.indexOf(b);
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});

function getCategoryInfo(cat: string) {
  const found = categories.find((c) => c.key === cat);
  return found || { label: cat, emoji: "📌" };
}

export default function VocationalPage() {
  const service = services.find((s) => s.slug === "vocational")!;

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

      {/* 领域导航 */}
      <section className="py-8 bg-zinc-50 border-b border-zinc-200 sticky top-0 z-10">
        <Container>
          <div className="flex flex-wrap gap-2">
            {sortedCategories.map(([cat]) => {
              const info = getCategoryInfo(cat);
              return (
                <a
                  key={cat}
                  href={`#cat-${cat.replace(/\s/g, "-")}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm border border-zinc-200 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors"
                >
                  <span>{info.emoji}</span>
                  <span>{info.label}</span>
                  <span className="text-zinc-300">({grouped.get(cat)!.length})</span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 分领域列举 */}
      {sortedCategories.map(([cat, schools]) => {
        const info = getCategoryInfo(cat);
        return (
          <section
            key={cat}
            id={`cat-${cat.replace(/\s/g, "-")}`}
            className="py-12 bg-white scroll-mt-20"
          >
            <Container>
              <SectionTitle
                title={`${info.emoji} ${info.label}`}
                subtitle={`共 ${schools.length} 所专门学校`}
              />
              <div className="grid gap-6 lg:grid-cols-2 mt-8">
                {schools.map((school) => (
                  <div key={school.id} id={school.id} className="rounded-xl border border-zinc-200 bg-white p-6 scroll-mt-20">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-primary-900">{school.name}</h3>
                        <p className="text-sm text-zinc-500">{school.nameJa}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                        {school.category.split(" / ").slice(0, 1).join("")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">📍 {school.location}</p>
                    <p className="mt-3 text-sm font-medium text-primary-800">{school.highlights}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">学费：{school.tuition}</span>
                      {school.employmentRate && (
                        <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">就业率：{school.employmentRate}</span>
                      )}
                    </div>
                    <div className="mt-4 space-y-2">
                      {school.programs.slice(0, 3).map((p) => (
                        <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-primary-900">{p.name}</div>
                            <span className="text-xs text-zinc-400">{p.duration}</span>
                          </div>
                          <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{p.description}</p>
                        </div>
                      ))}
                      {school.programs.length > 3 && (
                        <p className="text-xs text-zinc-400">+ 其他 {school.programs.length - 3} 个专业</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

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

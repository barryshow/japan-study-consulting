import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  graduatePaths,
  researchProposalGuide,
  professorContactGuide,
  graduateTimeline,
  importantNotes,
} from "@/data/graduate-guide";

export function GraduateGuideContent() {
  return (
    <>
      {/* 标题区 */}
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb
            items={[{ label: "首页", href: "/" }, { label: "留学服务", href: "/services" }, { label: "大学院申请指南" }]}
            className="mb-4"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-primary-900">日本大学院申请全流程指南</h1>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              详解四条申请路径的优劣对比、研究计划书写作方法、教授套词策略与模板、以及完整的申请时间线。
              无论你是刚有留学想法还是已经开始准备，这份指南都能帮你少走弯路。
            </p>
          </div>
        </Container>
      </section>

      {/* 四条路径 */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="四条申请路径" subtitle="选对路径，事半功倍。每条路径适合不同背景的申请者，请根据自身情况选择最合适的。" />
          <div className="mt-8 space-y-8">
            {graduatePaths.map((path) => (
              <div key={path.id} className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-primary-900">{path.title}</h3>
                  <span className="rounded-full bg-accent-100 px-3 py-0.5 text-xs font-semibold text-accent-600">{path.tag}</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 mb-6">
                  <MiniCard label="适合人群" value={path.suitable} />
                  <MiniCard label="难度" value={path.difficulty} />
                  <MiniCard label="费用" value={path.cost} />
                  <MiniCard label="时间" value={path.timeline} />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold text-primary-900 mb-3">📋 申请步骤</h4>
                    <ol className="space-y-2">
                      {path.steps.map((step, i) => (
                        <li key={i} className="flex gap-2 text-sm text-zinc-600">
                          <span className="text-accent-400 font-bold shrink-0">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-green-700 mb-2">✅ 优点</h4>
                      <ul className="space-y-1">
                        {path.pros.map((p, i) => (
                          <li key={i} className="flex gap-2 text-sm text-zinc-600">
                            <span className="text-green-500 shrink-0">✓</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-red-600 mb-2">⚠️ 缺点</h4>
                      <ul className="space-y-1">
                        {path.cons.map((c, i) => (
                          <li key={i} className="flex gap-2 text-sm text-zinc-600">
                            <span className="text-red-400 shrink-0">✗</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-primary-50 p-3">
                  <span className="text-xs font-semibold text-primary-800">💡 提示：</span>
                  <span className="text-xs text-primary-700">{path.tips}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 研究计划书 */}
      <section className="py-16 bg-zinc-50">
        <Container>
          <SectionTitle title={researchProposalGuide.title} subtitle={researchProposalGuide.intro} />
          <div className="mt-8 max-w-3xl space-y-8">
            {researchProposalGuide.sections.map((s) => (
              <div key={s.heading} className="rounded-xl bg-white border border-zinc-200 p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-3">{s.heading}</h3>
                {Array.isArray(s.content) ? (
                  <ul className="space-y-2">
                    {s.content.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-600 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-zinc-600 leading-relaxed">{s.content}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 教授套词 */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title={professorContactGuide.title} subtitle={professorContactGuide.intro} />
          <div className="mt-8 max-w-3xl space-y-8">
            {professorContactGuide.sections.map((s) => (
              <div key={s.heading} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-3">{s.heading}</h3>
                {s.subItems ? (
                  <ul className="space-y-1.5 mb-3">
                    {s.subItems.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-600 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                ) : null}
                {Array.isArray(s.content) ? (
                  <ul className="space-y-2">
                    {s.content.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-600 leading-relaxed flex gap-2">
                        <span className="text-accent-400 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <pre className="mt-2 text-xs text-zinc-700 bg-zinc-50 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap leading-relaxed">{s.content}</pre>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 时间线 */}
      <section className="py-16 bg-zinc-50">
        <Container>
          <SectionTitle title={graduateTimeline.title} subtitle={graduateTimeline.intro} />
          <div className="mt-8 max-w-3xl">
            <div className="relative border-l-2 border-primary-200 ml-3">
              {graduateTimeline.phases.map((phase, i) => (
                <div key={i} className="mb-8 ml-6 relative">
                  <div className="absolute -left-[calc(1.5rem+3px)] top-0 h-5 w-5 rounded-full bg-primary-600 border-2 border-white" />
                  <span className="text-xs font-semibold text-accent-500">{phase.period}</span>
                  <h3 className="text-lg font-bold text-primary-900 mt-0.5">{phase.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex gap-2 text-sm text-zinc-600">
                        <span className="text-primary-400 shrink-0">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 重要提醒 */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="重要提醒" subtitle="这些要点可能影响你的整个申请策略" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-4xl">
            {importantNotes.map((note) => (
              <div key={note.title} className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-base font-bold text-amber-900 mb-2">{note.title}</h3>
                <p className="text-sm text-amber-800 leading-relaxed">{note.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">需要一对一申请指导？</h2>
            <p className="mt-3 text-primary-100">免费评估你的背景，制定最优申请策略，获得研究计划书专业辅导</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              免费评估
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-zinc-50 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="text-sm font-medium text-zinc-700 mt-0.5">{value}</div>
    </div>
  );
}
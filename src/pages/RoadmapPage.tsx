import { roadmapItems } from '../data/labsContent'

function RoadmapPage() {
  return (
    <main className="mx-auto w-[min(1160px,calc(100%-24px))] pb-12 pt-6">
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78a9ff]">Roadmap</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-100">Labs 방향성</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          소개형 페이지를 넘어, 실제 운영 기능과 데이터 연결이 중심인 Labs 허브로 확장하는 로드맵입니다.
        </p>
      </section>

      <section className="mt-6 grid gap-3 md:grid-cols-3">
        {roadmapItems.map((item) => (
          <article
            key={item.phase}
            className="rounded-xl border border-slate-700 bg-slate-900/90 p-5 transition hover:-translate-y-1 hover:border-[#4A7A47]/70"
          >
            <h2 className="text-lg font-semibold text-[#78a9ff]">{item.phase}</h2>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default RoadmapPage

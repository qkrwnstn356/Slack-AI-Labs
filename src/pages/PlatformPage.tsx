import { Link } from 'react-router-dom'
import { platformCards } from '../data/labsContent'

function PlatformPage() {
  return (
    <main className="mx-auto w-[min(1160px,calc(100%-24px))] pb-12 pt-6">
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78a9ff]">Platform</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-100">Platform Map 상세</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          Labs에서 운영 중인 핵심 영역을 기능 기준으로 정리했습니다. 서비스 소개가 아니라, 실제 연결 가능한
          업무 흐름 중심으로 구조화되어 있습니다.
        </p>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        {platformCards.map((card, index) => (
          <article
            key={card.title}
            className={`rounded-xl border bg-slate-900/90 p-5 ${
              index === 0 ? 'border-[#4A7A47]/70' : 'border-slate-700'
            }`}
          >
            <h2 className="text-xl font-semibold text-slate-100">{card.title}</h2>
            {card.items ? (
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {card.items.map((item) => (
                  <li key={item} className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {card.description ? <p className="mt-3 text-sm text-slate-400">{card.description}</p> : null}
            {card.note ? <p className="mt-3 border-t border-slate-700 pt-3 text-xs text-[#78a9ff]">{card.note}</p> : null}
          </article>
        ))}
      </section>

      <div className="mt-6">
        <Link
          to="/core-app"
          className="inline-flex rounded-xl border border-[#4A7A47] bg-[#4A7A47] px-4 py-2 text-sm font-semibold text-slate-50 transition hover:-translate-y-0.5"
        >
          Slack Nyangi 상세 보기
        </Link>
      </div>
    </main>
  )
}

export default PlatformPage

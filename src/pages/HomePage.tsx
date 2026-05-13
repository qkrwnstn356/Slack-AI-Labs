import { Link } from 'react-router-dom'
import { platformCards, roadmapItems, showcaseItems } from '../data/labsContent'

function HomePage() {
  return (
    <main className="mx-auto w-[min(1160px,calc(100%-24px))] pb-12 pt-6">
      <section
        id="overview"
        className="relative overflow-hidden rounded-[28px] border border-slate-700 bg-slate-900 px-6 py-10 shadow-[0_20px_48px_rgba(0,0,0,0.35)] md:px-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(120,169,255,0.22),transparent_65%)]" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78a9ff]">AI LABS PLATFORM</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-slate-50 sm:text-6xl lg:text-7xl">
          앱과 워크플로를 연결하는
          <br />
          통합형 Labs 허브
        </h1>
        <p className="mt-5 max-w-3xl text-base text-slate-400 sm:text-lg">
          Slack Nyangi를 포함해 팀에서 운영하는 앱과 솔루션을 한 화면에서 연결합니다. 단순 소개가 아니라
          실제 업무 기능으로 바로 이어지는 Labs 구조를 목표로 합니다.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/platform"
            className="rounded-xl border border-[#4A7A47] bg-[#4A7A47] px-4 py-2.5 text-sm font-semibold text-slate-50 transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(74,122,71,0.28)]"
          >
            플랫폼 구조 보기
          </Link>
          <Link
            to="/core-app"
            className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-[#78a9ff] transition hover:-translate-y-0.5 hover:border-[#78a9ff]/60"
          >
            Slack Nyangi 상세 보기
          </Link>
        </div>

        <div id="metrics" className="mt-8 grid gap-3 md:grid-cols-3" role="list" aria-label="핵심 지표">
          {[
            ['12+', 'Active Experiments'],
            ['38%', 'Workflow Time Saved'],
            ['24/7', 'Automation Runtime'],
          ].map(([value, label]) => (
            <div
              key={label}
              role="listitem"
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 transition hover:-translate-y-0.5 hover:border-[#4A7A47]"
            >
              <strong className="block text-xl font-semibold text-slate-100">{value}</strong>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="platform-map" className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100">Platform Map</h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          현재 운영 중인 도메인을 기능 중심으로 묶어, 확장 가능한 Labs 포트폴리오로 관리합니다.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {platformCards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-xl border bg-slate-800/80 p-4 transition hover:-translate-y-1 hover:border-[#78a9ff]/60 ${
                index === 0 ? 'border-[#4A7A47]/70' : 'border-slate-700'
              }`}
            >
              {card.tag ? (
                <p className="mb-2 inline-block rounded-full border border-slate-600 px-2 py-1 text-[10px] tracking-[0.12em] text-[#78a9ff]">
                  {card.tag}
                </p>
              ) : null}
              <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
              {card.items ? (
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {card.items.map((item) => (
                    <li key={item} className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {card.description ? <p className="mt-3 text-sm text-slate-400">{card.description}</p> : null}
              {card.note ? <p className="mt-3 border-t border-slate-700 pt-3 text-xs text-[#78a9ff]">{card.note}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100">Slack Nyangi 핵심 운영 안내</h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          실제 운영 관점에서 Slack Nyangi가 어떤 흐름을 제공하는지 빠르게 이해하고, 도입팀이 바로 실행할 수
          있도록 핵심 포인트 중심으로 구성했습니다.
        </p>
        <div className="mt-5 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-xl border border-slate-700 bg-slate-800/80 p-4 transition hover:-translate-y-1 hover:border-[#78a9ff]/60">
            <h3 className="text-lg font-semibold text-slate-100">운영 포인트</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {showcaseItems.map((item) => (
                <li key={item} className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-400">
              양이닷컴 페이지에서 실제 소개 문구와 흐름을 확인한 뒤, 현재 Labs 허브에서 해당 기능으로 바로
              연결될 수 있도록 CTA를 제공합니다.
            </p>
            <a
              href="https://nyangidotcom.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-xl border border-[#4A7A47] bg-[#4A7A47] px-4 py-2 text-sm font-semibold text-slate-50 transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(74,122,71,0.28)]"
            >
              Slack Nyangi 페이지 보기
            </a>
          </article>
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-[#10182a]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,169,255,0.14),transparent_64%)]" />
            <div className="orb absolute left-1/2 top-1/2 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_28%_30%,#f8fbff,#82acff_38%,#2e4a7b_70%)] shadow-[0_0_28px_rgba(120,169,255,0.38)]" />
            <div className="ring ring-a absolute left-1/2 top-1/2 h-[196px] w-[196px] rounded-full border border-[#78a9ff]/30 border-t-[#78a9ff]/85" />
            <div className="ring ring-b absolute left-1/2 top-1/2 h-[244px] w-[140px] rounded-full border border-[#78a9ff]/20 border-r-[#78a9ff]/70" />
          </div>
        </div>
      </section>

      <section id="roadmap" className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100">Labs 방향성</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {roadmapItems.map((item) => (
            <article
              key={item.phase}
              className="rounded-xl border border-slate-700 bg-slate-800/80 p-4 transition hover:-translate-y-1 hover:border-[#4A7A47]/70"
            >
              <h3 className="text-base font-semibold text-[#78a9ff]">{item.phase}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage

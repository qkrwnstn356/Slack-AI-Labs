import { solutions } from '../data/labsContent'

function SolutionsPage() {
  return (
    <main className="mx-auto w-[min(1160px,calc(100%-24px))] pb-12 pt-6">
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78a9ff]">Solutions</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-100">솔루션 허브</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          운영팀이 바로 사용할 수 있는 실무형 솔루션을 모아두었습니다. 개별 기능이 아니라 Slack Nyangi와 연동되는
          흐름 기준으로 관리합니다.
        </p>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        <article className="rounded-xl border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-semibold text-slate-100">솔루션 목록</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {solutions.map((item) => (
              <li key={item} className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article id="google-service" className="rounded-xl border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-semibold text-slate-100">Google Service 연동</h2>
          <p className="mt-3 text-sm text-slate-400">
            캘린더/스프레드시트/워크스페이스 연동 기반 자동화 흐름을 통합합니다. 담당자 승인과 이벤트 트리거를
            결합해 반복 업무 처리 시간을 줄입니다.
          </p>
        </article>
      </section>
    </main>
  )
}

export default SolutionsPage

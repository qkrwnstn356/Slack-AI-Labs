function CoreAppPage() {
  return (
    <main className="mx-auto w-[min(1160px,calc(100%-24px))] pb-12 pt-6">
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78a9ff]">Core App</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-100">Slack Nyangi</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          양이닷컴은 Slack 기반 조직문화 자동화 경험을 실제 사용자 흐름에 맞춰 제공하는 핵심 App 영역입니다.
          Labs 허브에서는 해당 App을 시작점으로 온보딩, 커뮤니티, 운영 관리 기능을 점진적으로 확장합니다.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-[#4A7A47]/60 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold text-slate-100">페이지 연결 안내</h2>
        <p className="mt-3 text-slate-300">
          이미 제작해두신 양이닷컴 소개 페이지로 이동해 서비스 문구와 제품 맥락을 확인하고, 다시 Labs 허브에서
          연동 기능을 이어서 탐색할 수 있도록 연결했습니다.
        </p>
        <a
          href="https://nyangidotcom.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-xl border border-[#4A7A47] bg-[#4A7A47] px-4 py-2.5 text-sm font-semibold text-slate-50 transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(74,122,71,0.28)]"
        >
          Nyangi 페이지 열기
        </a>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold text-slate-100">운영 확장 포인트</h2>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-2">
            조직도, 온보딩, 커뮤니티 기능을 Slack 채널 기반으로 연결
          </li>
          <li className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-2">
            HR/예약 관리 흐름을 공통 인증 및 권한 체계로 통합
          </li>
          <li className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-2">
            CRM/Google Service와의 데이터 연결로 운영 자동화 강화
          </li>
        </ul>
      </section>
    </main>
  )
}

export default CoreAppPage

const coreApps = ['조직도', '온보딩', '커뮤니티', 'HR 관리', '예약 관리'];

const solutions = ['명함 App', '스워밍 커스텀 대화상자', '웹 채널 연동', 'AI'];

function App() {
  return (
    <main className="labs-page">
      <header className="hero">
        <p className="eyebrow">Slack AI Labs</p>
        <h1>앱과 워크플로를 연결하는 통합 허브</h1>
        <p className="hero-copy">
          Slack Nyangi를 포함해 팀에서 운영하는 앱과 솔루션을 한 화면에서 연결합니다.
          단순 소개가 아니라, 실제 업무 기능으로 바로 이어지는 Labs 구조를 목표로 합니다.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#platform-map">
            플랫폼 구조 보기
          </a>
          <a className="secondary" href="#core-app">
            핵심 App 영역
          </a>
        </div>
      </header>

      <section id="platform-map" className="section">
        <h2>Platform Map</h2>
        <p className="section-copy">
          현재 운영 중인 도메인을 기능 중심으로 묶어, 확장 가능한 Labs 포트폴리오로 관리합니다.
        </p>
        <div className="grid">
          <article id="core-app" className="card card-accent">
            <h3>Slack App (양이닷컴 - 핵심 App)</h3>
            <ul>
              {coreApps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="note">
              기존 Slack Nyangi는 이 영역의 대표 서비스로 포함되며, 향후 기능 모듈을 연결합니다.
            </p>
          </article>

          <article className="card">
            <h3>솔루션</h3>
            <ul>
              {solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3>Google Service</h3>
            <p>캘린더/스프레드시트/워크스페이스 연동 기반 자동화 흐름을 통합합니다.</p>
          </article>

          <article className="card">
            <h3>Slack CRM</h3>
            <p>문의, 히스토리, 영업 파이프라인을 Slack 이벤트와 연결해 추적합니다.</p>
          </article>
        </div>
      </section>

      <section className="section roadmap">
        <h2>Labs 방향성</h2>
        <div className="timeline">
          <div>
            <h4>Now</h4>
            <p>서비스 소개형 페이지를 기능 연결형 허브로 전환</p>
          </div>
          <div>
            <h4>Next</h4>
            <p>앱 간 데이터 플로우를 공통 인증/권한 체계로 통합</p>
          </div>
          <div>
            <h4>Scale</h4>
            <p>새 솔루션이 추가되어도 같은 구조에서 빠르게 연결/확장</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

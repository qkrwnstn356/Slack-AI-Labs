import type { NavItem, ProgramCard, RoadmapItem } from '../types/labs'

export const navItems: NavItem[] = [
  {
    label: 'Overview',
    to: '/',
    subItems: [
      { label: '플랫폼 개요', to: '/#overview', description: 'Labs의 비전과 운영 목적' },
      { label: '핵심 지표', to: '/#metrics', description: '현재 운영 성과와 확장 지표' },
    ],
  },
  {
    label: 'Platform',
    to: '/platform',
    subItems: [
      { label: 'Platform Map', to: '/platform', description: '도메인 구조와 연결 맵' },
      { label: 'Core App', to: '/core-app', description: 'Slack Nyangi 중심 핵심 기능 소개' },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    subItems: [
      { label: '솔루션 목록', to: '/solutions', description: '현재 운영/확장 중인 솔루션' },
      { label: 'Google Service', to: '/solutions#google-service', description: '워크스페이스 자동화 연동' },
    ],
  },
  {
    label: 'Roadmap',
    to: '/roadmap',
    subItems: [
      { label: 'Now / Next / Scale', to: '/roadmap', description: '단계별 제품/조직 확장 계획' },
    ],
  },
]

export const coreApps = ['조직도', '온보딩', '커뮤니티', 'HR 관리', '예약 관리']
export const solutions = ['명함 App', '스워밍 커스텀 대화상자', '웹 채널 연동', 'AI']

export const platformCards: ProgramCard[] = [
  {
    title: 'Slack Nyangi',
    items: coreApps,
    note: '기존 Slack Nyangi는 이 영역의 대표 서비스로 포함되며, 향후 기능 모듈을 연결합니다.',
    tag: 'CORE',
  },
  {
    title: '솔루션',
    items: solutions,
    tag: 'SOLUTION',
  },
  {
    title: 'Google Service',
    description: '캘린더/스프레드시트/워크스페이스 연동 기반 자동화 흐름을 통합합니다.',
    tag: 'INTEGRATION',
  },
  {
    title: 'Slack CRM',
    description: '문의, 히스토리, 영업 파이프라인을 Slack 이벤트와 연결해 추적합니다.',
    tag: 'TRACKING',
  },
]

export const roadmapItems: RoadmapItem[] = [
  { phase: 'Now', description: '서비스 소개형 페이지를 기능 연결형 허브로 전환' },
  { phase: 'Next', description: '앱 간 데이터 플로우를 공통 인증/권한 체계로 통합' },
  { phase: 'Scale', description: '새 솔루션이 추가되어도 같은 구조에서 빠르게 연결/확장' },
]

export const showcaseItems = [
  '실시간 조직문화 운영 시나리오를 Slack에서 바로 실행',
  '도입팀 관점의 온보딩/권한/데이터 흐름을 단일 화면에서 안내',
  '운영팀이 바로 테스트할 수 있도록 핵심 기능 링크를 빠르게 제공',
]

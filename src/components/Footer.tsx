import type { NavItem } from '../types/labs'
import { Link } from 'react-router-dom'

interface FooterProps {
  navItems: NavItem[]
}

function Footer({ navItems }: FooterProps) {
  return (
    <footer
      id="footer"
      className="mx-auto grid w-[min(1160px,calc(100%-24px))] gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/80 px-5 py-4"
    >
      <div>
        <p className="text-base font-semibold text-slate-100">Slack AI Labs</p>
        <p className="text-sm text-slate-400">
          Labs 운영 경험을 바탕으로 앱, 워크플로, 자동화를 하나의 업무 플랫폼으로 연결합니다.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="rounded-lg border border-slate-700 px-2.5 py-1 text-xs text-slate-300 transition hover:border-[#4A7A47] hover:text-[#78a9ff]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <p className="text-xs text-slate-500">© 2026 Slack AI Labs. All rights reserved.</p>
    </footer>
  )
}

export default Footer

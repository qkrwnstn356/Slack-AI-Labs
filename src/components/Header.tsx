import type { NavItem } from '../types/labs'
import { Link, NavLink } from 'react-router-dom'

interface HeaderProps {
  navItems: NavItem[]
}

function Header({ navItems }: HeaderProps) {
  return (
    <header className="sticky top-4 z-20 mx-auto flex w-[min(1160px,calc(100%-24px))] items-center justify-between gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 backdrop-blur">
      <Link to="/" aria-label="Slack AI Labs 홈" className="inline-flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4A7A47] shadow-[0_0_0_4px_rgba(74,122,71,0.25)]" />
        <span className="text-sm font-semibold tracking-wide text-slate-100">Slack AI Labs</span>
      </Link>

      <nav aria-label="주요 메뉴" className="flex flex-wrap items-center gap-1">
        {navItems.map((item) => (
          <div key={item.label} className="group relative">
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:text-[#78a9ff] ${
                  isActive ? 'text-[#78a9ff]' : 'text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
            {item.subItems?.length ? (
              <div className="pointer-events-none invisible absolute right-0 top-full z-30 w-72 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-xl border border-slate-700 bg-slate-900/95 p-2 shadow-xl">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.to}
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-800"
                    >
                      <p className="text-sm font-medium text-slate-200">{subItem.label}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{subItem.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header

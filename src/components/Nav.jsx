import { NavLink, Link } from 'react-router-dom'
import { site } from '../lib/site.js'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">🌿</span>
          <span className="brand-name">{site.title}</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            首页
          </NavLink>
          <NavLink to="/tags" className={({ isActive }) => (isActive ? 'active' : '')}>
            标签
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            关于
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

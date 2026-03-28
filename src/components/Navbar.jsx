import { Link, useLocation } from 'react-router-dom'
import '/src/assets/css/navbar.css'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        AEstack<span>.dev</span>
      </Link>
      <div className="links">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`link ${pathname === l.to ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
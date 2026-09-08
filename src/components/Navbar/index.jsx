import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import avatarImg from '../../assets/outono.jpg'

export function Navbar() {
  const anuncios = 24
  const contatos = 8
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/sobre', label: 'Sobre o RoomHub' },
    { to: '/contato', label: 'Contato' },
    { to: '/historico', label: 'Meus anúncios' },
  ]

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>⌂ RoomHub</Link>
        </div>
        <div className="navbar-stats">
          <div className="stat">
            <div className="stat-label">Anúncios ativos</div>
            <div className="stat-value">{anuncios}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Contatos salvos</div>
            <div className="stat-value">{contatos}</div>
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-links navbar-links-desktop">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="avatar" title="Perfil">
          <img src={avatarImg} alt="avatar" />
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`menu-overlay ${isMenuOpen ? 'is-visible' : ''}`} onClick={closeMenu} />
      <aside className={`sidebar ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="sidebar-header">
          <strong>Menu</strong>
          <button type="button" className="sidebar-close" onClick={closeMenu} aria-label="Fechar menu">
            ×
          </button>
        </div>
        <div className="sidebar-links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </aside>
    </nav>
  )
}
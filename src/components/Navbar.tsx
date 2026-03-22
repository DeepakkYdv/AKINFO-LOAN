'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#loans', label: 'Loan Products' },
  { href: '#insurance', label: 'Insurance' },
  { href: '/career', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
      <div className="container">
        <Link
          className="navbar-brand fs-6 text-uppercase fw-semibold d-flex align-items-center gap-2"
          href="#hero"
          onClick={closeMenu}
        >
          <span className="px-2 py-1 rounded-pill border" style={{ color: 'var(--accent)', borderColor: 'rgba(200, 169, 110, 0.35)' }}>
            AK
          </span>
          <span>Loan & Insurance Consultancy</span>
        </Link>

        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          aria-controls="mainNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse collapse ${isOpen ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a className="nav-link text-uppercase small muted-copy" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-dark btn-sm text-uppercase rounded-pill px-4 ms-lg-4 mt-3 mt-lg-0"
            onClick={closeMenu}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

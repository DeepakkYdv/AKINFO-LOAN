'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#calculator', label: 'Calculator' },
  { href: '#process', label: 'Process' },
]

const BRANCH_LINKS = [
  { href: '#contact', label: 'Gurugram' },
  { href: '#contact', label: 'Patna' },
  { href: '#contact', label: 'Hajipur' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <div className={styles.logoIcon}>AK</div>
          <div className={styles.logoText}>
            <strong>AK Loan & Insurance Consultant</strong>
            {/* <span className={styles.partnerLine}>
              <em>Partnered By</em>
              <strong>Urban Money</strong>
            </span> */}
          </div>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <details className={styles.branchMenu}>
              <summary className={styles.branchTrigger}>Branches</summary>
            <ul className={styles.branchDropdown}>
              {BRANCH_LINKS.map((branch) => (
                <li key={branch.label}>
                  <a href={branch.href}>{branch.label}</a>
                </li>
              ))}
            </ul>
            </details>
          </li>
          <li>
            <a href="#contact" className={styles.navCta}>Contact Us</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <div className={styles.mobileBranches}>
          <span className={styles.mobileBranchLabel}>Branches</span>
          {BRANCH_LINKS.map((branch) => (
            <a key={branch.label} href={branch.href} onClick={closeMenu}>
              {branch.label}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={closeMenu} className={styles.mobileCta}>
          Contact Us
        </a>
      </div>
    </>
  )
}

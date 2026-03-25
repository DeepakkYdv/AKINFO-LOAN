import { SITE } from '@/lib/siteData'
import styles from './Footer.module.css'

const SERVICES_LINKS = [
  'Home Loan', 'Business Loan', 'Personal Loan',
  'Vehicle Loan', 'Life Insurance', 'Health Insurance',
]

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#calculator', label: 'EMI Calculator' },
  { href: '#process', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            <div className={styles.logoIcon}>AK</div>
            <div className={styles.logoText}>
              <strong>AK Consultancy</strong>
              <span>Loan &amp; Insurance Services</span>
            </div>
          </a>
          <p className={styles.tagline}>
            Your trusted financial partner in Vaishali, Bihar. Expert guidance on
            loans and insurance to help every family achieve their dreams.
          </p>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h5>Our Services</h5>
          <ul>
            {SERVICES_LINKS.map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h5>Quick Links</h5>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} AK Loan &amp; Insurance Consultancy Services. All rights reserved.</p>
        <p>
          Director: <span className={styles.gold}>{SITE.director}</span>
          {' '}| Hajipur, Vaishali, Bihar
        </p>
      </div>
    </footer>
  )
}

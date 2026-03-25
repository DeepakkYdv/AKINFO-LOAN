import { STATS } from '@/lib/siteData'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgPattern} />
      <div className={styles.accent} />

      <div className={styles.inner}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span>Trusted Financial Advisors — Vaishali, Bihar</span>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Your Path to <em>Financial</em> Freedom Starts Here
        </h1>

        {/* Subtext */}
        <p className={styles.sub}>
          AK Loan &amp; Insurance Consultancy Services provides expert guidance on home
          loans, personal loans, business loans, and all types of insurance — making
          finance simple and accessible for every family.
        </p>

        {/* CTAs */}
        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">
            📞 Get Free Consultation
          </a>
          <a href="#calculator" className="btn-secondary">
            📊 Loan Calculator
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

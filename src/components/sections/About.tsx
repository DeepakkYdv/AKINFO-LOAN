import { WHY_POINTS, SITE } from '@/lib/siteData'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="fade-in">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>
          Why Choose Us
        </span>
        <h2 className="section-title white">
          Trusted by Hundreds of<br />Families in Bihar
        </h2>
        <div className="divider" />
        <p className="section-desc white">
          Decades of experience, deep local knowledge, and genuine care for every
          client&apos;s financial wellbeing.
        </p>
      </div>

      <div className={`${styles.grid} fade-in`}>
        <div className={styles.points}>
          {WHY_POINTS.map((p) => (
            <div key={p.title} className={styles.point}>
              <div className={styles.pointIcon}>
                <i className={`bi ${p.icon}`}></i>
              </div>
              <div>
                <h4 className={styles.pointTitle}>{p.title}</h4>
                <p className={styles.pointDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.visual}>
          <div className={styles.directorCard}>
            <div className={styles.avatar}>AY</div>
            <div className={styles.directorName}>{SITE.director}</div>
            <div className={styles.directorTitle}>Director &amp; Financial Advisor</div>
            <p className={styles.quote}>
              &quot;Our mission is simple - help every family in Bihar access affordable
              finance and protection, without confusion or delays.&quot;
            </p>
          </div>

          <div className={styles.addressBlock}>
            <div className={styles.addressLabel}>
              <i className="bi bi-geo-alt-fill"></i> Office Address
            </div>
            <p className={styles.addressText}>
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.line3}<br />
              {SITE.address.line4}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

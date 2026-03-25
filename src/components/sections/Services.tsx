import { SERVICES } from '@/lib/siteData'
import ServiceCard from '@/components/ui/ServiceCard'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="fade-in">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title">
          Complete Financial<br />Solutions Under One Roof
        </h2>
        <div className="divider" />
        <p className="section-desc">
          From home loans to life insurance, we handle every step — paperwork, approval,
          and beyond — so you can focus on your goals.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

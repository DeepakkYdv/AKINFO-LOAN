import { SITE } from '@/lib/siteData'
import styles from './FloatingButtons.module.css'

export default function FloatingButtons() {
  return (
    <div className={styles.wrapper}>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className={`${styles.btn} ${styles.whatsapp}`}
      >
        <i className="bi bi-whatsapp"></i> WhatsApp Us
      </a>
      <a href={`tel:${SITE.phone1}`} className={styles.btn}>
        <i className="bi bi-telephone-fill"></i> Call Now
      </a>
    </div>
  )
}

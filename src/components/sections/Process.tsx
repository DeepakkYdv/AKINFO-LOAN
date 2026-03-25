import { PROCESS_STEPS } from '@/lib/siteData'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className="fade-in" style={{ textAlign: 'center' }}>
        <span className="section-label">How It Works</span>
        <h2 className="section-title">Simple 4-Step Process</h2>
        <div className="divider center" />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          We've made getting a loan or insurance policy as smooth as possible.
        </p>
      </div>

      <div className={`${styles.steps} fade-in`}>
        {PROCESS_STEPS.map((step) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.stepNum}>{step.num}</div>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

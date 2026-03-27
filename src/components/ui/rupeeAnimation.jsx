'use client'

import styles from './RupeeAnimation.module.css'

const FLOATING_SYMBOLS = [
  { symbol: '\u20B9', top: '8%', left: '18%', delay: '0s', size: styles.small },
  { symbol: '\u20B9', top: '20%', left: '74%', delay: '1.2s', size: styles.medium },
  { symbol: '\u20B9', top: '52%', left: '8%', delay: '2.1s', size: styles.medium },
  { symbol: '\u20B9', top: '68%', left: '72%', delay: '0.8s', size: styles.large },
  { symbol: '\u20B9', top: '82%', left: '28%', delay: '1.7s', size: styles.small },
]

export default function RupeeAnimation() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.orb} />

      {FLOATING_SYMBOLS.map((item, index) => (
        <span
          key={`${item.top}-${item.left}-${index}`}
          className={`${styles.floatToken} ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
          }}
        >
          {item.symbol}
        </span>
      ))}

      <div className={styles.card}>
        <div className={styles.cardGlow} />

        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Financial Momentum</div>
            <div className={styles.title}>Smart approvals. Faster growth.</div>
          </div>
          <div className={styles.badge}>Live</div>
        </div>

        <div className={styles.rupeeRing}>
          <div className={styles.ringOuter}>
            <div className={styles.ringInner}>{'\u20B9'}</div>
          </div>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Loan support</span>
            <strong className={styles.metricValue}>150+ Banks</strong>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Response speed</span>
            <strong className={styles.metricValue}>48-72 hrs</strong>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Client trust</span>
            <strong className={styles.metricValue}>10k+ Families</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

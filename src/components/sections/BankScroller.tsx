import styles from './BankScroller.module.css'

const BANKS = [
  { name: 'HDFC Bank', domain: 'hdfcbank.com' },
  { name: 'ICICI Bank', domain: 'icicibank.com' },
  { name: 'State Bank of India', domain: 'sbi.co.in' },
  { name: 'Axis Bank', domain: 'axisbank.com' },
  { name: 'Punjab National Bank', domain: 'pnbindia.in' },
  { name: 'Bank of Baroda', domain: 'bankofbaroda.in' },
  { name: 'Kotak Mahindra Bank', domain: 'kotak.com' },
  { name: 'IDFC FIRST Bank', domain: 'idfcfirstbank.com' },
  { name: 'Canara Bank', domain: 'canarabank.com' },
  { name: 'Bajaj Finserv', domain: 'bajajfinserv.in' },
  { name: 'LIC Housing Finance', domain: 'lichousing.com' },
  { name: 'Tata Capital', domain: 'tatacapital.com' },
]

const partnerRows = [...BANKS, ...BANKS]

export default function BankScroller() {
  return (
    <section className={styles.section} aria-label="Bank partners">
      <div className={styles.intro}>
        <span className="section-label">Trusted Network</span>
        <h2 className={styles.title}>Connected with leading banks and NBFCs</h2>
        <p className={styles.desc}>
          We compare offers across major lenders to find the right fit for your
          profile, paperwork, and timeline.
        </p>
      </div>

      <div className={styles.marqueeShell}>
        <div className={styles.edgeLeft} aria-hidden="true" />
        <div className={styles.edgeRight} aria-hidden="true" />

        <div className={styles.track}>
          {partnerRows.map((bank, index) => (
            <article
              key={`${bank.name}-${index}`}
              className={styles.card}
              aria-hidden={index >= BANKS.length}
            >
              <div className={styles.logoWrap}>
                <img
                  src={`https://logo.clearbit.com/${bank.domain}`}
                  alt={`${bank.name} logo`}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>Verified Partner</span>
                <strong className={styles.cardTitle}>{bank.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

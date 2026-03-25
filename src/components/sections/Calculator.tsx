'use client'

import { useState, useEffect } from 'react'
import { LOAN_TABS } from '@/lib/siteData'
import styles from './Calculator.module.css'

function formatINR(value: number) {
  return '₹' + Math.round(value).toLocaleString('en-IN')
}

export default function Calculator() {
  const [activeTab, setActiveTab] = useState(0)
  const [amount, setAmount] = useState(LOAN_TABS[0].amount)
  const [rate, setRate] = useState(LOAN_TABS[0].rate)
  const [tenure, setTenure] = useState(LOAN_TABS[0].tenure)

  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const P = amount
    const r = rate / 12 / 100
    const n = tenure * 12
    const e = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = e * n
    setEmi(e)
    setTotalInterest(total - P)
    setTotalAmount(total)
  }, [amount, rate, tenure])

  const handleTabChange = (idx: number) => {
    const tab = LOAN_TABS[idx]
    setActiveTab(idx)
    setAmount(tab.amount)
    setRate(tab.rate)
    setTenure(tab.tenure)
  }

  return (
    <section id="calculator" className={styles.calculator}>
      <div className="fade-in" style={{ textAlign: 'center' }}>
        <span className="section-label">Financial Tools</span>
        <h2 className="section-title">EMI Calculator</h2>
        <div className="divider center" />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Instantly calculate your monthly EMI for any loan type.
        </p>
      </div>

      <div className={`${styles.wrapper} fade-in`}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {LOAN_TABS.map((tab, idx) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === idx ? styles.tabActive : ''}`}
              onClick={() => handleTabChange(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className={styles.inputGrid}>
          <div className={styles.field}>
            <label>Loan Amount (₹)</label>
            <input
              type="number"
              value={amount}
              min={10000}
              step={10000}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label>Interest Rate (% p.a.)</label>
            <input
              type="number"
              value={rate}
              min={1}
              max={30}
              step={0.1}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label>Loan Tenure (Years)</label>
            <input
              type="number"
              value={tenure}
              min={1}
              max={30}
              onChange={(e) => setTenure(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Result */}
        <div className={styles.result}>
          <div className={styles.emiLabel}>Monthly EMI</div>
          <div className={styles.emiValue}>{formatINR(emi)}</div>
          <div className={styles.breakdown}>
            <div className={styles.breakdownItem}>
              <span>Principal</span>
              <strong>{formatINR(amount)}</strong>
            </div>
            <div className={styles.breakdownItem}>
              <span>Total Interest</span>
              <strong>{formatINR(totalInterest)}</strong>
            </div>
            <div className={styles.breakdownItem}>
              <span>Total Amount</span>
              <strong>{formatINR(totalAmount)}</strong>
            </div>
          </div>
        </div>

        <a href="#contact" className={`btn-primary ${styles.applyBtn}`}>
          Apply for This Loan →
        </a>
      </div>
    </section>
  )
}

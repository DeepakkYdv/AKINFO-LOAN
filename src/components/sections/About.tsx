'use client'

import { useEffect, useState } from 'react'
import { WHY_POINTS, SITE } from '@/lib/siteData'
import styles from './About.module.css'

export default function About() {
  const profiles = [    
    {
      initials: 'KY',
      name: SITE.owner,
      title: 'Owner',
      quote:
        'We believe financial guidance should feel personal, trustworthy, and easy to understand for every client who walks through our door.',
    },
    // {
    //   initials: 'AY',
    //   name: SITE.director,
    //   title: 'Director & Financial Advisor',
    //   quote:
    //     'Our mission is simple - help every family in Bihar access affordable finance and protection, without confusion or delays.',
    // },
  ]

  const [activeProfile, setActiveProfile] = useState(0)
  const profile = profiles[activeProfile]

  const showPrevious = () => {
    setActiveProfile((prev) => (prev === 0 ? profiles.length - 1 : prev - 1))
  }

  const showNext = () => {
    setActiveProfile((prev) => (prev === profiles.length - 1 ? 0 : prev + 1))
  }
useEffect(() => {
    const interval = setInterval(() => {
      setActiveProfile((prev) => (prev === profiles.length - 1 ? 0 : prev + 1))
    }, 3000) // Change profile every 10 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [profiles.length])
  return (
    <section id="about" className={styles.about}>
      <div className="fade-in">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>
          Why Choose Us
        </span>
        <h2 className="section-title white">
          Trusted by Millions of<br />Families in Bihar
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
          <div className={styles.sliderHeader}>
            <div className={styles.sliderLabel}>Leadership</div>
            <div className={styles.sliderControls}>
              <button
                type="button"
                className={styles.sliderButton}
                onClick={showPrevious}
                aria-label="Show previous profile"
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <button
                type="button"
                className={styles.sliderButton}
                onClick={showNext}
                aria-label="Show next profile"
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className={styles.directorCard}>
            <div className={styles.avatar}>{profile.initials}</div>
            <div className={styles.directorName}>{profile.name}</div>
            <div className={styles.directorTitle}>{profile.title}</div>
            <p className={styles.quote}>&quot;{profile.quote}&quot;</p>
          </div>

          <div className={styles.sliderDots}>
            {profiles.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === activeProfile ? styles.activeDot : styles.dot}
                onClick={() => setActiveProfile(index)}
                aria-label={`Show ${item.name} profile`}
              />
            ))}
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

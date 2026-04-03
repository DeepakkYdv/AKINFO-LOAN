'use client'

import { useState } from 'react'
import { SITE, SERVICE_OPTIONS, AMOUNT_OPTIONS } from '@/lib/siteData'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', service: '', amount: '', message: '',
  })
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError('Please fill in Name, Phone, and Service fields.')
      return
    }

    const whatsappMessage = [
      'Hello AK Consultancy, I would like to enquire about your services.',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      form.amount ? `Loan Amount: ${form.amount}` : '',
      form.message.trim() ? `Message: ${form.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.location.assign(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    )
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="fade-in">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>
          Get In Touch
        </span>
        <h2 className="section-title white">Visit Us or Send a Message</h2>
        <div className="divider" />
      </div>

      <div className={`${styles.grid} fade-in`}>
        <div className={styles.info}>
          <ContactItem icon="bi-geo-alt-fill" label="Office Address">
            <p>
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.line3}<br />
              {SITE.address.line4}
            </p>
          </ContactItem>

          <ContactItem icon="bi-telephone-fill" label="Call / WhatsApp">
            <p>
              <a href={`tel:${SITE.phone1}`}>{SITE.phone1}</a><br />
              <a href={`tel:${SITE.landline}`}>{SITE.landline}</a><br />
              {/* <a href={`tel:${SITE.phone2}`}>{SITE.phone2}</a> */}
            </p>
          </ContactItem>

          <ContactItem icon="bi-envelope-fill" label="Email Us">
            <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </ContactItem>

          <ContactItem icon="bi-clock-fill" label="Office Hours">
            <p>
              {SITE.hours.weekdays}<br />
              {SITE.hours.sunday}
            </p>
          </ContactItem>

          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.mapBox}
          >
            <span className={styles.mapIcon}>
              <i className="bi bi-map-fill"></i>
            </span>
            <span className='text-center'>
            <p>AK Loan and Insurance Consultancy services</p>
             <p>Jadhua, Hajipur, Vaishali, Bihar 844102</p>
            </span>
            <span className={styles.mapLink}>Open in Google Maps -&gt;</span>
          </a>
        </div>

        <div className={styles.formBox}>
          <h3 className={styles.formTitle}>Send Us an Enquiry</h3>

          <div className={styles.formInner}>
            <div className={styles.row}>
              <Field label="Full Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </Field>
            </div>

            <Field label="Service Interested In">
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">Select Service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>

            <Field label="Loan Amount Required">
              <select name="amount" value={form.amount} onChange={handleChange}>
                <option value="">Select Range</option>
                {AMOUNT_OPTIONS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </Field>

            <Field label="Message (Optional)">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirement..."
                rows={4}
              />
            </Field>

            {error && <p className={styles.error}>{error}</p>}

            <button className={styles.submitBtn} onClick={handleSubmit}>
              Send Message  →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon, label, children,
}: {
  icon: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.item}>
      <div className={styles.itemIcon}>
        <i className={`bi ${icon}`}></i>
      </div>
      <div className={styles.itemText}>
        <span>{label}</span>
        {children}
      </div>
    </div>
  )
}

function Field({
  label, children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      {children}
    </div>
  )
}

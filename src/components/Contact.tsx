'use client'

import { useState } from 'react'

export default function Contact() {
  const whatsappNumber = '917520864943'
  const [formStatus, setFormStatus] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
    amount: '',
    message: '',
  })

  const defaultLabel = 'Request Free Consultation'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = [
      'Hello AK INFO, I would like a free consultation.',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Loan Type: ${formData.loanType}`,
      `Loan Amount: ${formData.amount}`,
      `Message: ${formData.message || 'N/A'}`
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    setFormStatus('Opening WhatsApp...')
    setTimeout(() => {
      setFormStatus('')
    }, 4000)
  }

  return (
    <section id="contact" className="py-5 bg-secondary bg-opacity-10">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="form-surface h-100 p-4 p-lg-5 d-flex flex-column">
              <div className="section-tag mb-2">
                Get In Touch
                <span className="eyebrow-rule"></span>
              </div>
              <h2 className="section-title fw-light mb-2">Start Your <em style={{ color: 'var(--accent)' }}>Journey</em> Today</h2>
              <p className="section-heading-copy muted-copy mt-1 mb-4">
                Tell us what you need and we will help you compare the most practical path for loan approval or insurance coverage.
              </p>
              <div className="contact-detail">
                <div className="text-uppercase small text-warning">Office</div>
                <div className="h6 mb-0">AK INFO Loan Consultation<br />Bihar, India</div>
              </div>
              <div className="contact-detail">
                <div className="text-uppercase small text-warning">Office Mobile</div>
                <div className="h6 mb-0">
                  <a className="contact-link" href="tel:+917520864943">+91 7520864943</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="text-uppercase small text-warning">WhatsApp</div>
                <div className="h6 mb-0">
                  <a className="contact-link" href="https://wa.me/917520864943" target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="text-uppercase small text-warning">Director</div>
                <div className="h6 mb-0">Abhay Yadav</div>
              </div>
              <div className="contact-detail">
                <div className="text-uppercase small text-warning">Email</div>
                <div className="h6 mb-0">info@akinfoloan.com</div>
              </div>
              <div className="contact-detail">
                <div className="text-uppercase small text-warning">Hours</div>
                <div className="h6 mb-0">Mon - Sat, 9AM - 7PM</div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-surface h-100 p-4 p-lg-5 d-flex flex-column">
              <div className="section-tag mb-2">
                Free Consultation Request
                <span className="eyebrow-rule"></span>
              </div>
              <h2 className="section-title fw-light mb-2">Tell us your <em style={{ color: 'var(--accent)' }}>requirement</em></h2>

              <form id="consultationForm" className="mt-4" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label text-uppercase small muted-copy">Full Name</label>
                    <input
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label text-uppercase small muted-copy">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label text-uppercase small muted-copy">Loan Type</label>
                    <select
                      name="loanType"
                      className="form-select"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select loan type</option>
                      <option>Home Loan</option>
                      <option>Business Loan</option>
                      <option>Personal Loan</option>
                      <option>Education Loan</option>
                      <option>Vehicle Loan</option>
                      <option>Loan Against Property</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label text-uppercase small muted-copy">Loan Amount (Rs)</label>
                    <input
                      name="amount"
                      className="form-control"
                      placeholder="e.g. 25,00,000"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-uppercase small muted-copy">Message (Optional)</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows={6}
                      placeholder="Any specific requirements or questions..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" id="submitBtn" className="btn btn-dark w-100 text-uppercase rounded-pill py-3">
                      {formStatus || defaultLabel}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

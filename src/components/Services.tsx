const services = [
  {
    id: '01',
    icon: 'bi-house-door-fill',
    title: 'Home Loan',
    tag: 'Property Finance',
    description:
      'End-to-end assistance for property purchase, construction, or renovation finance with competitive interest rates.',
  },
  {
    id: '02',
    icon: 'bi-briefcase-fill',
    title: 'Business Loan',
    tag: 'Growth Capital',
    description:
      'Working capital, expansion funding, and MSME loans tailored for small and medium enterprises across India.',
  },
  {
    id: '03',
    icon: 'bi-mortarboard-fill',
    title: 'Education Loan',
    tag: 'Future Planning',
    description:
      'Secure your future with subsidized education loans for domestic and international universities and institutions.',
  },
  {
    id: '04',
    icon: 'bi-car-front-fill',
    title: 'Vehicle Loan',
    tag: 'Quick Mobility',
    description:
      'New or used vehicle financing with minimal documentation, lender comparison, and quick approval support.',
  },
  {
    id: '05',
    icon: 'bi-wallet-fill',
    title: 'Personal Loan',
    tag: 'Fast Access',
    description:
      'Unsecured personal loans for medical, travel, wedding, and urgent needs with fast turnaround.',
  },
  {
    id: '06',
    icon: 'bi-bank2',
    title: 'Loan Against Property',
    tag: 'High Value',
    description:
      'Unlock property equity for large financial needs at significantly lower rates than unsecured lending.',
  },
  {
    id: '07',
    icon: 'bi-shield-lock-fill',
    title: 'Life Insurance',
    tag: 'Family Protection',
    description:
      'Term, ULIP, and savings-oriented plans to protect your family and support future goals.',
  },
  {
    id: '08',
    icon: 'bi-heart-pulse-fill',
    title: 'Health Insurance',
    tag: 'Medical Security',
    description:
      'Mediclaim, critical illness, and wellness plans for individuals, families, and corporate teams.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-5 services-section">
      <div className="container section-shell ps-lg-5">
        <div className="services-shell section-block">
          <div className="section-heading mb-0">
            <div>
              <div className="section-tag mb-2">
                What We Offer
                <span className="eyebrow-rule"></span>
              </div>
              <h2 className="section-title fw-light mb-2">All loans and insurance solutions in one place.</h2>
              <p className="services-intro section-heading-copy muted-copy body-lg mb-0">
                We help clients compare options clearly, choose the right product faster, and move ahead with confidence from enquiry to approval.
              </p>
            </div>
            <div className="about-highlight h-100">
              <div className="about-kicker mb-2">Coverage</div>
              <p className="muted-copy mb-0">
                From personal borrowing to long-term protection, our support spans core retail finance and insurance needs for individuals and businesses.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-xl-3">
                <article className="service-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <small className="service-meta text-uppercase muted-copy">{service.id}</small>
                    <span className="service-chip">{service.tag}</span>
                  </div>
                  <div className="service-icon mb-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="h4 mb-2">{service.title}</h3>
                  <p className="service-copy muted-copy mb-0">{service.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

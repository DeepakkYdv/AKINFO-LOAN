export default function Process() {
  return (
    <section id="process" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="section-tag mb-2 text-warning">
              How It Works
              <span className="eyebrow-rule"></span>
            </div>
            <h2 className="section-title fw-light mb-2">Four Steps to Your <em style={{ color: 'var(--accent)' }}>Approval</em></h2>
          </div>
          <p className="section-heading-copy text-white-50 mb-0">A streamlined process designed to move you from enquiry to disbursement with clear milestones and less back-and-forth.</p>
        </div>

        <div className="row g-3">
          <div className="col-md-6 col-xl-3">
            <article className="step-card h-100 bg-secondary bg-opacity-10 border-secondary border-opacity-25">
              <div className="h1 fw-bold text-white-50">01</div>
              <h3 className="h5 text-white">Free Consultation</h3>
              <p className="text-white-50 mb-0">Share your requirements. We assess eligibility and map the best lending options available for you.</p>
            </article>
          </div>
          <div className="col-md-6 col-xl-3">
            <article className="step-card h-100 bg-secondary bg-opacity-10 border-secondary border-opacity-25">
              <div className="h1 fw-bold text-white-50">02</div>
              <h3 className="h5 text-white">Document Preparation</h3>
              <p className="text-white-50 mb-0">We guide you through every document, from KYC and income proof to property papers, with a simple checklist.</p>
            </article>
          </div>
          <div className="col-md-6 col-xl-3">
            <article className="step-card h-100 bg-secondary bg-opacity-10 border-secondary border-opacity-25">
              <div className="h1 fw-bold text-white-50">03</div>
              <h3 className="h5 text-white">Bank Liaison</h3>
              <p className="text-white-50 mb-0">We submit and follow up with our banking partners on your behalf while keeping you updated at every stage.</p>
            </article>
          </div>
          <div className="col-md-6 col-xl-3">
            <article className="step-card h-100 bg-secondary bg-opacity-10 border-secondary border-opacity-25">
              <div className="h1 fw-bold text-white-50">04</div>
              <h3 className="h5 text-white">Disbursement</h3>
              <p className="text-white-50 mb-0">Once sanctioned, the amount is disbursed directly to your account or to the relevant seller or institution.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

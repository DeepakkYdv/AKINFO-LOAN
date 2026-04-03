export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-text">LIC</div>
      <div className="container position-relative" style={{zIndex: 2}}>
        <div className="row justify-content-between align-items-center g-5">
          <div className="col-lg-7">
            <div className="section-tag mb-3">
              Loan & Insurance Consultancy
              <span className="eyebrow-rule"></span>
            </div>
            <h1 className="display-title fw-light mb-3">
              Your <em style={{color: 'var(--accent)'}}>Loan</em> + <em style={{color: 'var(--accent)'}}>Insurance</em><br/>Roadmap to Financial Security.
            </h1>
            <p className="muted-copy body-lg mb-4 pe-lg-5">
              AK Loan & Insurance Consultancy helps graduates, families, and growing businesses find the right finance and protection plan with clear guidance from first conversation to final approval.
            </p>
            <div className="d-flex flex-wrap gap-3 hero-actions">
              <a className="btn btn-dark btn-lg text-uppercase" href="#contact"><i className="bi bi-calendar-check-fill me-2"></i>Book Consultation</a>
              <a className="btn btn-outline-secondary btn-lg text-uppercase" href="/career"><i className="bi bi-briefcase-fill me-2"></i>Explore Careers</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="soft-panel about-card h-100">
              <div className="about-kicker mb-2">About AK INFO</div>
              <h2 className="section-title fw-light mb-3">Trusted guidance with a personal touch.</h2>
              <p className="muted-copy body-lg mb-4">
                Led by Director Kanchan Yadav, we help clients move from uncertainty to action with practical advice, lender coordination, and insurance planning that stays easy to understand.
              </p>
              <div className="row g-3 position-relative">
                <div className="col-sm-6">
                  <div className="about-highlight h-100">
                    <div className="about-metric fw-light mb-2">12+</div>
                    <p className="muted-copy mb-0">Years of experience across loans, policy selection, and documentation support.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about-highlight h-100">
                    <div className="about-metric fw-light mb-2">1:1</div>
                    <p className="muted-copy mb-0">Personal consultation so every client understands the best next step before applying.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

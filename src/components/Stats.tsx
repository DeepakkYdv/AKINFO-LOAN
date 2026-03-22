export default function Stats() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="stats-shell section-block">
          <div className="section-heading mb-0">
            <div>
              <div className="section-tag mb-2">
                At A Glance
                <span className="eyebrow-rule"></span>
              </div>
              <h2 className="section-title fw-light mb-2">Numbers that build confidence.</h2>
              <p className="stats-intro section-heading-copy muted-copy body-lg mb-0">
                Our work is built on responsiveness, consistent support, and practical results across loan and insurance consultations.
              </p>
            </div>
            <div className="about-highlight h-100">
              <div className="about-kicker mb-2">Client Promise</div>
              <p className="muted-copy mb-0">
                We keep the process clear, explain every step, and stay closely involved until the case moves forward.
              </p>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-sm-6 col-lg-3">
              <div className="stat-card">
                <h2 className="stat-value fw-light mb-2">12<span className="text-warning">+</span></h2>
                <small className="stat-label text-uppercase muted-copy d-block mb-3">Years Experience</small>
                <p className="stat-note muted-copy mb-0">Long-term guidance across approvals, policy selection, and documentation support.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="stat-card">
                <h2 className="stat-value fw-light mb-2">5K<span className="text-warning">+</span></h2>
                <small className="stat-label text-uppercase muted-copy d-block mb-3">Loans Processed</small>
                <p className="stat-note muted-copy mb-0">Strong exposure to home, business, personal, education, and vehicle loan journeys.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="stat-card">
                <h2 className="stat-value fw-light mb-2">98<span className="text-warning">%</span></h2>
                <small className="stat-label text-uppercase muted-copy d-block mb-3">Approval Rate</small>
                <p className="stat-note muted-copy mb-0">A high success rate driven by better case matching, preparation, and follow-through.</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="stat-card">
                <h2 className="stat-value fw-light mb-2">24<span className="text-warning">h</span></h2>
                <small className="stat-label text-uppercase muted-copy d-block mb-3">Response Time</small>
                <p className="stat-note muted-copy mb-0">Quick callbacks and next-step clarity so clients are never left waiting too long.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

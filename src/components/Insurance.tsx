export default function Insurance() {
  return (
    <section id="insurance" className="py-5 bg-light">
      <div className="container section-shell ps-lg-5">
        <div className="section-heading">
          <div>
            <div className="section-tag mb-2">
              Insurance Products
              <span className="eyebrow-rule"></span>
            </div>
            <h2 className="section-title fw-light mb-2">Complete Insurance Coverage for Every Need</h2>
          </div>
          <p className="section-heading-copy muted-copy mb-0">One portal for life, health, motor, home, travel, and business insurance solutions with policy guidance that stays practical.</p>
        </div>

        <div className="data-table-wrap">
          <div className="table-responsive">
            <table className="table data-table align-middle">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Type</th>
                  <th>Coverage</th>
                  <th>Duration</th>
                  <th>Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="fw-semibold">Term Life</td><td>Life</td><td>Rs 25L - Rs 5Cr</td><td>10-35 years</td><td>High protection</td></tr>
                <tr><td className="fw-semibold">Comprehensive Health</td><td>Health</td><td>Rs 1L - Rs 5L</td><td>1-3 years</td><td>Cashless hospitals</td></tr>
                <tr><td className="fw-semibold">Motor Insurance</td><td>Vehicle</td><td>Own damage + third party</td><td>1 year</td><td>Zero depreciation</td></tr>
                <tr><td className="fw-semibold">Home Insurance</td><td>Home</td><td>Structure + contents</td><td>1 year</td><td>Fire, theft, flood</td></tr>
                <tr><td className="fw-semibold">Travel Insurance</td><td>Travel</td><td>Worldwide</td><td>1 day - 1 year</td><td>Medical and baggage</td></tr>
                <tr><td className="fw-semibold">Commercial Liability</td><td>Business</td><td>Rs 50L - Rs 10Cr</td><td>1 year</td><td>Broad liability</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Loans() {
  return (
    <section id="loans" className="py-5">
      <div className="container section-shell ps-lg-5">
        <div className="section-heading">
          <div>
            <div className="section-tag mb-2">
              Loan Products
              <span className="eyebrow-rule"></span>
            </div>
            <h2 className="section-title fw-light mb-2">Compare <em style={{ color: 'var(--accent)' }}>Options</em></h2>
          </div>
          <p className="section-heading-copy muted-copy mb-0">Indicative rates and terms to help clients compare directionally before we shortlist the right lender mix.</p>
        </div>

        <div className="data-table-wrap">
          <div className="table-responsive">
            <table className="table data-table align-middle">
              <thead>
                <tr>
                  <th>Loan Type</th>
                  <th>Interest Rate</th>
                  <th>Tenure</th>
                  <th>Amount Range</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="fw-semibold">Home Loan</td><td>8.40% - 9.85% p.a.</td><td>Up to 30 years</td><td>Rs 5L - Rs 5Cr</td><td><span className="loan-badge">Popular</span></td></tr>
                <tr><td className="fw-semibold">Business Loan</td><td>10.50% - 16% p.a.</td><td>1 - 7 years</td><td>Rs 1L - Rs 1Cr</td><td><span className="loan-badge">Fast Track</span></td></tr>
                <tr><td className="fw-semibold">Personal Loan</td><td>10.99% - 20% p.a.</td><td>1 - 5 years</td><td>Rs 50K - Rs 40L</td><td><span className="loan-badge">48hr Approval</span></td></tr>
                <tr><td className="fw-semibold">Education Loan</td><td>8.55% - 11% p.a.</td><td>Up to 15 years</td><td>Rs 1L - Rs 1.5Cr</td><td><span className="loan-badge">Subsidized</span></td></tr>
                <tr><td className="fw-semibold">Vehicle Loan</td><td>7.90% - 13% p.a.</td><td>1 - 7 years</td><td>Rs 1L - Rs 1Cr</td><td><span className="loan-badge">Available</span></td></tr>
                <tr><td className="fw-semibold">Loan Against Property</td><td>9.00% - 12% p.a.</td><td>Up to 20 years</td><td>Rs 10L - Rs 10Cr</td><td><span className="loan-badge">High Value</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="info-card">
              <h4>Compare by rate</h4>
              <p className="muted-copy">Look at the interest range first, then match the option to income profile and repayment comfort.</p>
              <ul className="info-list">
                <li>Home Loan: 8.40% - 9.85%</li>
                <li>Personal Loan: 10.99% - 20%</li>
                <li>Business Loan: 10.50% - 16%</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <h4>Compare by term</h4>
              <p className="muted-copy">Tenure affects EMI comfort, total interest outgo, and how flexible the loan feels month to month.</p>
              <ul className="info-list">
                <li>Long-term: Home Loan up to 30 years</li>
                <li>Mid-term: LAP up to 20 years</li>
                <li>Short-term: Personal and business loans from 1 to 7 years</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <h4>Compare by agility</h4>
              <p className="muted-copy">Some cases prioritize the lowest rate, while others need the fastest path to approval and disbursal.</p>
              <ul className="info-list">
                <li>Fastest turnaround: Personal loan</li>
                <li>Business expansion support: Business loan</li>
                <li>Structured underwriting: Home and education loans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

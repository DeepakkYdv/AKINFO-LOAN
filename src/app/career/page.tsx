export default function CareerPage() {
  return (
    <main className="py-5" style={{ background: 'var(--bg)' }}>
      <div className="container py-5 px-3 px-lg-5">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h1 className="display-5 fw-light">Careers at AK Loan & Insurance Consultancy</h1>
            <p className="lead text-muted">Join our growing team. We hire graduates and experienced talent for sales, underwriting, customer support, and operations.</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
              <h3>Openings for Graduates</h3>
              <p className="text-muted">Any graduate can apply for entry-level roles in sales, customer service, and documentation.</p>
              <ul className="mb-0">
                <li>Loan consultant</li>
                <li>Insurance advisor</li>
                <li>Document verification</li>
                <li>Lead generation</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
              <h3>Internships</h3>
              <p className="text-muted">Internships available for commerce, finance, and MBA students with stipend and placement assistance.</p>
              <ul className="mb-0">
                <li>Loan processing intern</li>
                <li>Insurance policy intern</li>
                <li>Digital marketing intern</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-12">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <h3>How To Apply</h3>
              <p className="text-muted">Send your resume to <a href="mailto:careers@akloaninsurance.com" className="link-primary">careers@akloaninsurance.com</a> with role preference and a short cover letter.</p>
              <p className="text-muted">Or call our HR desk at +91 XXXXX XXXXX during 10am-6pm.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

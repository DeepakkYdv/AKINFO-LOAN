export default function Footer() {
  return (
    <footer className="py-4 footer-shell">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="fw-bold text-uppercase small">AK <span style={{ color: 'var(--accent)' }}>INFO</span> | Loan Consultation</div>
        <div className="muted-copy small">© 2025 AK INFO. All rights reserved.</div>
        <div className="d-flex align-items-center gap-3">
          <a className="muted-copy text-decoration-none" href="#">Privacy</a>
          <a className="muted-copy text-decoration-none" href="#">Terms</a>
          <a className="muted-copy text-decoration-none" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

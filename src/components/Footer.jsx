import { Link } from 'react-router-dom'
import '/src/assets/css/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2026 AEstack</span>
      <div className="footer-links">
        <a href="https://github.com/aestack" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
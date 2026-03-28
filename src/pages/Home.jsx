import { Link } from 'react-router-dom'
import '/src/assets/css/home.css'

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="badge">Available for work</div>
        <h1>We build things<br /><span>that actually ship.</span></h1>
        <p>AEstack is a two-person dev team crafting clean, performant web products — from idea to deployment.</p>
        <div className="actions">
          <Link to="/projects" className="btnPrimary">View Projects</Link>
          <Link to="/contact" className="btnGhost">Get in touch</Link>
        </div>
      </section>

      <section className="section">
        <div className="sectionLabel">What we do</div>
        <div className="pillars">
          {['Web Apps', 'APIs & Back-end', 'UI & Design Systems', 'Deployment & DevOps'].map(p => (
            <div key={p} className="pillar">{p}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
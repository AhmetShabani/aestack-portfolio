import { Link } from 'react-router-dom'
import '../assets/css/home.css'

const stats = [
  { value: '2', label: 'Developers' },
  { value: 'Full-Stack', label: 'Front & Back end' },
  { value: 'Always', label: 'Shipping' },
  { value: 'Open', label: 'To Work' },
]

const stack = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'C#', 'Python', 'Java'] },
  { category: 'Frameworks', items: ['React', 'Angular', 'ASP.NET', 'Flask', 'Bootstrap'] },
  { category: 'Tools', items: ['SQL', 'REST APIs', 'Git'] },
]

const featured = [
  {
    title: 'DreamFilms',
    description: 'A cinematic landing page with equipment rental, portfolio gallery, and email integration.',
    tags: ['React', 'Vite', 'React Bootstrap'],
    demo: 'https://www.dreamfilms-ks.com',
  },
  {
    title: 'PurEst',
    description: 'A multilingual landing page for an eco-friendly cleaning service with booking form.',
    tags: ['React', 'Vite', 'CSS Modules'],
    demo: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A RESTful API service with caching, rate limiting and full Docker support.',
    tags: ['Express', 'Redis', 'Docker'],
    demo: '#',
  },
]

const reasons = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'We move quickly without cutting corners. From kickoff to deployment, we keep things on track.',
  },
  {
    icon: '🧹',
    title: 'Clean Code',
    desc: "Readable, maintainable, and scalable. We write code we're proud to hand off.",
  },
  {
    icon: '💬',
    title: 'Direct Communication',
    desc: 'No middlemen. You talk directly to the developers building your product.',
  },
  {
    icon: '🔧',
    title: 'Full-Stack Coverage',
    desc: 'Front-end to back-end, database to deployment — we handle the full picture.',
  }
]

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

      <section className="section stats-section">
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionLabel">Tech Stack</div>
        <div className="stack-grid">
          {stack.map(group => (
            <div key={group.category} className="stack-group">
              <span className="stack-category">{group.category}</span>
              <div className="stack-items">
                {group.items.map(item => (
                  <span key={item} className="stack-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-top">
          <div className="sectionLabel">Featured Projects</div>
          <Link to="/projects" className="viewAll">View all →</Link>
        </div>
        <div className="featured-grid">
          {featured.map(project => (
            <div key={project.title} className="featured-card">
              <div className="featured-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="ftag">{tag}</span>
                ))}
              </div>
              <h3 className="featured-title">{project.title}</h3>
              <p className="featured-desc">{project.description}</p>
              <a href={project.demo} className="featured-btn" target="_blank">View Site →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionLabel">Why AEstack</div>
        <div className="reasons-grid">
          {reasons.map(r => (
            <div key={r.title} className="reason-card">
              <span className="reason-icon">{r.icon}</span>
              <h3 className="reason-title">{r.title}</h3>
              <p className="reason-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Ready to build something?</h2>
        <p>We're available for new projects. Let's talk about what you have in mind.</p>
        <Link to="/contact" className="btnPrimary" target="_blank">Start a conversation →</Link>
      </section>

    </div>
  )
}
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
    title: 'Project Alpha',
    description: 'A full-stack web application with real-time data, authentication, and a clean dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    demo: '#',
  },
  {
    title: 'Project Beta',
    description: 'A modern analytics dashboard built for performance and scalability.',
    tags: ['Next.js', 'Tailwind', 'Prisma'],
    demo: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A RESTful API service with caching, rate limiting and full Docker support.',
    tags: ['Express', 'Redis', 'Docker'],
    demo: '#',
  },
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
              <a href={project.demo} className="featured-btn">Live Demo →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
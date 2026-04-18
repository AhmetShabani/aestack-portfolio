import '/src/assets/css/projects.css'
import dreamfilms from '../assets/img/dreamfilms.png'
import purest from '../assets/img/pfr.png'

const projects = [
  {
    title: 'DreamFilms',
    description: 'A modern film & video production landing page built with Vite + React and React Bootstrap. Features a dark cinematic theme, equipment rental system with email integration, portfolio gallery, and a smooth loading screen animation.',
    tags: ['React', 'Vite', 'React Bootstrap'],
    image: dreamfilms,
    demo: 'https://www.dreamfilms-ks.com',
  },
    {
    title: 'PurEst',
    description: 'A multilingual landing page for an eco-friendly cleaning service. Features a French/English language switcher, smooth animations, and a booking form — built with a fully custom CSS design system.',
    tags: ['React', 'Vite', 'React Bootstrap', 'CSS Modules'],
    image: purest,
    demo: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A RESTful API service with caching, rate limiting, and full Docker support. Built for high availability and easy deployment.',
    tags: ['Express', 'Redis', 'Docker'],
    image: 'https://placehold.co/600x400/13131a/a855f7?text=Project+Gamma',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Our <span>Projects</span></h1>
        <p>A selection of things we've built — from web apps to APIs and everything in between.</p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={project.title} className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.description}</p>
              <a href={project.demo} className="demo-btn" target="_blank" rel="noreferrer">
                View Site →
              </a>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
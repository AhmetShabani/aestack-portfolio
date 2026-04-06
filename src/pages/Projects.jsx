import '/src/assets/css/projects.css'

const projects = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application built with React and Node.js. Features real-time data, authentication, and a clean dashboard interface.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/13131a/a855f7?text=Project+Alpha',
    demo: '#',
  },
  {
    title: 'Project Beta',
    description: 'A modern dashboard for data visualization and analytics. Built with Next.js and Tailwind, optimized for performance and scalability.',
    tags: ['Next.js', 'Tailwind', 'Prisma'],
    image: 'https://placehold.co/600x400/13131a/22d3ee?text=Project+Beta',
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
                Live Demo →
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
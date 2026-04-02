import '/src/assets/css/team.css'
import ahmet from '../assets/img/ahmet.png'
import ermal from '../assets/img/ermal.png'

const team = [
  {
    name: 'Ahmet Shabani',
    role: 'Full-stack Developer',
    initials: 'AS',
    image: ahmet,
    github: '#',
    linkedin: '#',
    portfolio: '#',
  },
  {
    name: 'Ermal Bela',
    role: 'Full-stack Developer',
    initials: 'EB',
    image: ermal,
    github: '#',
    linkedin: '#',
    portfolio: '#',
  },
]

export default function Team() {
  return (
    <div className="team-page">
      <div className="team-grid">
        {team.map((member) => (
          <div key={member.name} className="member-card">
            <div className="avatar-circle">
              {member.image
                ? <img src={member.image} alt={member.name} />
                : <span>{member.initials}</span>
              }
            </div>
            <h2 className="member-name">{member.name}</h2>
            <p className="member-role">{member.role}</p>
            <div className="member-links">
              <a href={member.github} className="link-btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={member.linkedin} className="link-btn" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={member.portfolio} className="link-btn link-btn-primary" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
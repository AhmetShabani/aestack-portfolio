import { useState } from 'react'
import '../assets/css/contactus.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to your backend/email service here
    setSent(true)
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="badge">Let's talk</div>
        <h1>Got a project<br /><span>in mind?</span></h1>
        <p>We're a two-person team — so when you reach out, you talk directly to the people building your product.</p>
        <div className="actions">
          <a href="mailto:hello@aestack.dev" className="btnPrimary">hello@aestack.dev</a>
        </div>
      </section>

      <section className="section">
        <div className="sectionLabel">Send a message</div>

        {sent ? (
          <div className="successMessage">
            <span className="successIcon">✓</span>
            <p>Message received — we'll get back to you shortly.</p>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btnPrimary">Send message</button>
          </form>
        )}
      </section>

      <section className="section">
        <div className="sectionLabel">Other ways to reach us</div>
        <div className="pillars">
          {[
            { label: 'Email', value: 'hello@aestack.dev' },
            { label: 'GitHub', value: 'github.com/aestack' },
            { label: 'Twitter / X', value: '@aestack' },
            { label: 'LinkedIn', value: 'AEstack' },
          ].map(({ label, value }) => (
            <div key={label} className="pillar">
              <span className="pillarLabel">{label}</span>
              <span className="pillarValue">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
import { contact } from '@/data/content';

export default function Contact() {
  return (
    <section id="contact" className="section-narrow contact-content">
      <h2 className="section-title">Get in Touch</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
        Open to new opportunities, collaborations, or just a chat about design systems and frontend craft.
      </p>
      <a href={`mailto:${contact.email}`} className="contact-email">
        {contact.email}
      </a>
      <div className="social-list">
        {contact.socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}

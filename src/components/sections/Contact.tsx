import { contact } from '@/data/content';

export default function Contact() {
  return (
    <section id="contact" className="contact-content">
      <span className="section-number">VI</span>
      <h2 className="section-title">Contact</h2>
      <a href={`mailto:${contact.email}`} className="contact-email">
        {contact.email}
      </a>
      <ul className="social-list">
        {contact.socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { contact } from '@/data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Made with care</p>
        <p className="footnote">Built with Next.js, deployed to Netlify.</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="social-list" aria-label="Social links">
          {contact.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

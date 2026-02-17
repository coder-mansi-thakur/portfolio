import Link from 'next/link';

const sections = [
  { name: 'About', href: '/about', number: 'I' },
  { name: 'Work', href: '/work', number: 'II' },
  { name: 'Experience', href: '/experience', number: 'III' },
  { name: 'Thoughts', href: '/thoughts', number: 'IV' },
  { name: 'Playground', href: '/playground', number: 'V' },
  { name: 'Contact', href: '/contact', number: 'VI' },
];

export default function Hero() {
  return (
    <section className="hero">
      <nav aria-label="Table of contents">
        <ul className="toc-list">
          {sections.map((section) => (
            <li key={section.href} className="toc-item">
              <Link href={section.href} className="toc-link">
                <span>{section.name}</span>
              </Link>
              <span className="toc-number">{section.number}</span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

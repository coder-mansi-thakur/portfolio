const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#blog', label: 'Writing' },
  { href: '#playground', label: 'Playground' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-brand">
        <div className="brand-mark" aria-hidden="true" />
        <div className="brand-text">
          <p className="eyebrow">Portfolio</p>
          <p className="brand-name">Avery Quinn</p>
        </div>
      </div>
      <nav aria-label="Primary">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="/">Home</a>
      </div>
      <ThemeToggle />
    </footer>
  );
}

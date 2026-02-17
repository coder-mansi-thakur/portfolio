'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const preferredTheme = savedTheme || 'dark';
    setTheme(preferredTheme);
    document.documentElement.setAttribute('data-theme', preferredTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return (
      <button className="theme-toggle" disabled aria-label="Loading theme">
        ☀️
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      suppressHydrationWarning
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

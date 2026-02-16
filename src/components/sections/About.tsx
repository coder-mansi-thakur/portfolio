import { profile } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="section-narrow">
      <h2 className="section-title">About</h2>
      <h3>{profile.name}</h3>
      <p className="eyebrow">{profile.role} · {profile.location}</p>
      <p style={{ marginTop: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
        {profile.summary}
      </p>
      <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-accent)', fontWeight: 600 }}>
        {profile.availability}
      </p>
    </section>
  );
}

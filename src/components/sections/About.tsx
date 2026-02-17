import { profile } from '@/data/content';

export default function About() {
  return (
    <section id="about">
      <span className="section-number">I</span>
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="drop-cap">{profile.summary}</p>
        <p>{profile.availability}</p>
      </div>
    </section>
  );
}

import { hero } from '@/data/content';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{hero.headline}</h1>
        <p className="hero-blurb">{hero.blurb}</p>
        <div className="hero-ctas">
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-secondary">
            {hero.secondaryCta.label}
          </a>
        </div>
        <ul className="highlights-list">
          {hero.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

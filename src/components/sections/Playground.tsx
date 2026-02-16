import { playground } from '@/data/content';

export default function Playground() {
  return (
    <section id="playground">
      <h2 className="section-title">Playground</h2>
      <div className="card-grid">
        {playground.map((item) => (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="card">
            <h3>{item.title}</h3>
            <p className="card-description">{item.blurb}</p>
            <span className="tag">{item.status}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

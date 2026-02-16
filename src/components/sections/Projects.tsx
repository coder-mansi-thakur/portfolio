import { projects } from '@/data/content';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

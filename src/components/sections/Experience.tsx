import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className="section-narrow">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div key={item.role + item.company} className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-period">{item.period}</p>
            </div>
            <p className="timeline-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

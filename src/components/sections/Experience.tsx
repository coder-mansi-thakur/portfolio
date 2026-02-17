import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience">
      <span className="section-number">III</span>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div key={item.role + item.company} className="timeline-item">
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-summary">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

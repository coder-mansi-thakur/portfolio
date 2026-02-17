import { blogPosts } from '@/data/content';

export default function Blog() {
  return (
    <section id="blog">
      <span className="section-number">IV</span>
      <h2 className="section-title">Thoughts</h2>
      <div className="list-simple">
        {blogPosts.map((post) => (
          <a key={post.title} href={post.href} target="_blank" rel="noreferrer" className="list-item">
            <div className="list-item-year">{post.year}</div>
            <div className="list-item-content">
              <h3>{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

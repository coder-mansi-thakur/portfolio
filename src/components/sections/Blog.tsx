import { blogPosts } from '@/data/content';

export default function Blog() {
  return (
    <section id="blog" className="section-narrow">
      <h2 className="section-title">Writing</h2>
      <div className="list-simple">
        {blogPosts.map((post) => (
          <a key={post.title} href={post.href} target="_blank" rel="noreferrer" className="list-item">
            <h3>{post.title}</h3>
            <p className="list-item-meta">{post.date}</p>
            <p className="list-item-excerpt">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

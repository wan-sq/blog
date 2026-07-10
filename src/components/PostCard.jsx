import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <article className="card">
      <div className="card-meta">
        <time dateTime={post.date}>{post.date}</time>
        {post.tags.map((t) => (
          <Link
            key={t}
            to={`/tags?tag=${encodeURIComponent(t)}`}
            className="tag tag-sm"
          >
            {t}
          </Link>
        ))}
      </div>
      <h2 className="card-title">
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      {post.excerpt && <p className="card-excerpt">{post.excerpt}</p>}
      <Link to={`/post/${post.slug}`} className="card-more">
        继续阅读 →
      </Link>
    </article>
  )
}

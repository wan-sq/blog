import { useParams, Link } from 'react-router-dom'
import { posts, getPost } from '../lib/posts.js'
import Markdown from '../lib/Markdown.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="container">
        <p className="empty">
          没有找到这篇文章。<Link to="/">← 返回首页</Link>
        </p>
      </div>
    )
  }

  const idx = posts.findIndex((p) => p.slug === slug)
  const prev = posts[idx + 1] // 更旧
  const next = posts[idx - 1] // 更新

  return (
    <div className="container">
      <article className="post">
        <Link to="/" className="back">
          ← 返回
        </Link>

        <header className="post-header">
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
          <h1 className="post-title">{post.title}</h1>
          {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
        </header>

        <Markdown>{post.body}</Markdown>

        <nav className="post-nav">
          {prev ? (
            <Link to={`/post/${prev.slug}`} className="post-nav-item">
              <span className="post-nav-label">← 更早</span>
              <span className="post-nav-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/post/${next.slug}`} className="post-nav-item post-nav-right">
              <span className="post-nav-label">更新 →</span>
              <span className="post-nav-title">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  )
}

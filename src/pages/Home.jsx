import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { posts, getAllTags } from '../lib/posts.js'
import { site } from '../lib/site.js'
import PostCard from '../components/PostCard.jsx'

export default function Home() {
  const [params, setParams] = useSearchParams()
  const activeTag = params.get('tag')
  const [query, setQuery] = useState('')

  const allTags = useMemo(() => getAllTags(), [])

  const filtered = useMemo(() => {
    const q = query.trim()
    return posts.filter((p) => {
      const okTag = !activeTag || p.tags.includes(activeTag)
      const okQ =
        !q ||
        p.title.includes(q) ||
        p.excerpt.includes(q) ||
        p.tags.some((t) => t.includes(q))
      return okTag && okQ
    })
  }, [activeTag, query])

  const setTag = (t) => {
    if (activeTag === t) setParams({})
    else setParams({ tag: t })
  }

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero-title">{site.title}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <div className="search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文章 / 标签…"
            aria-label="搜索文章"
          />
        </div>
      </section>

      <section className="tagbar">
        <button
          className={`tag ${!activeTag ? 'tag-active' : ''}`}
          onClick={() => setParams({})}
        >
          全部 {posts.length}
        </button>
        {allTags.map(({ name, count }) => (
          <button
            key={name}
            className={`tag ${activeTag === name ? 'tag-active' : ''}`}
            onClick={() => setTag(name)}
          >
            {name} {count}
          </button>
        ))}
      </section>

      {filtered.length === 0 ? (
        <p className="empty">没有匹配的文章，换个关键词试试？</p>
      ) : (
        <section className="post-list">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      )}
    </div>
  )
}

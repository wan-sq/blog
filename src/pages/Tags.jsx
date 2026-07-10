import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllTags } from '../lib/posts.js'

export default function Tags() {
  const navigate = useNavigate()
  const allTags = useMemo(() => getAllTags(), [])
  const max = Math.max(...allTags.map((t) => t.count), 1)

  return (
    <div className="container">
      <header className="page-head">
        <h1>标签</h1>
        <p className="page-sub">共 {allTags.length} 个标签，点一下就能筛选文章。</p>
      </header>

      <div className="tag-cloud">
        {allTags.map(({ name, count }) => (
          <button
            key={name}
            className="cloud-tag"
            style={{ fontSize: `${0.9 + (count / max) * 0.9}rem` }}
            onClick={() => navigate(`/?tag=${encodeURIComponent(name)}`)}
          >
            {name}
            <span className="cloud-count">{count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

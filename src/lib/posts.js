import { parseFrontmatter } from './frontmatter.js'

// 通过 Vite 的 import.meta.glob 在构建时把 content/posts 下的所有 .md
// 作为原始字符串读入，再解析 frontmatter。新增文章只需丢一个 .md 文件进来。
const modules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  eager: true,
})

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const { data, content } = parseFrontmatter(mod.default)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      body: content,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getAllTags() {
  const map = {}
  posts.forEach((p) => p.tags.forEach((t) => (map[t] = (map[t] || 0) + 1)))
  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

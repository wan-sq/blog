// 极简 frontmatter 解析器：只处理本项目用到的字段，无需额外依赖。
// 支持：
//   title: 字符串
//   date:  字符串
//   excerpt: 字符串
//   tags:  [标签1, 标签2]
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const fm = match[1]
  const content = match[2].replace(/^\n+/, '')
  const data = {}

  fm.split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      val = val.replace(/^["']|["']$/g, '')
    }
    if (key) data[key] = val
  })

  return { data, content }
}

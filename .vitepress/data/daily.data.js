import { createContentLoader } from 'vitepress'

function formatDate(d) {
  const date = new Date(d)
  if (isNaN(date.getTime())) return ''
  const p = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`
}

/** 日常动态数据：daily/p/ 下每个 md 文件就是一条动态 */
export default createContentLoader('daily/p/*.md', {
  render: true,
  transform(raw) {
    return raw
      .sort(
        (a, b) =>
          new Date(b.frontmatter?.date || 0) - new Date(a.frontmatter?.date || 0)
      )
      .map(({ url, frontmatter, html }) => ({
        url,
        date: formatDate(frontmatter?.date),
        html
      }))
  }
})

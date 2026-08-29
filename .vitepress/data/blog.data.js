import { createContentLoader } from 'vitepress'

function formatDate(d) {
  const date = new Date(d)
  if (isNaN(date.getTime())) return ''
  return date.toISOString().slice(0, 10)
}

function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, '')
    .trim()
}

/** 估算阅读时长：中文按 400 字/分钟，英文按 200 词/分钟 */
function readMinutes(html = '') {
  const text = stripHtml(html)
  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length
  const other = text.length - cjk
  return Math.max(1, Math.round(cjk / 400 + other / 1200))
}

/** 博客文章数据：blog/posts/ 下的文章按日期倒序输出 */
export default createContentLoader('blog/posts/*.md', {
  render: true,
  transform(raw) {
    return raw
      .sort(
        (a, b) =>
          new Date(b.frontmatter?.date || 0) - new Date(a.frontmatter?.date || 0)
      )
      .map(({ url, frontmatter, excerpt, html }) => ({
        url,
        title: frontmatter?.title || url,
        date: formatDate(frontmatter?.date),
        year: formatDate(frontmatter?.date).slice(0, 4) || '早期',
        tags: Array.isArray(frontmatter?.tags) ? frontmatter.tags : [],
        excerpt,
        minutes: readMinutes(html)
      }))
  }
})

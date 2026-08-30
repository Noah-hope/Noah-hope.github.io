import { createContentLoader } from 'vitepress'

function formatDate(d) {
  const date = new Date(d)
  if (isNaN(date.getTime())) return ''
  const p = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`
}

function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function readMinutes(html = '') {
  const text = stripHtml(html)
  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length
  return Math.max(1, Math.round(cjk / 400 + (text.length - cjk) / 1200))
}

/** 日常动态数据：daily/p/ 下每个 md 文件就是一条动态，详情页即该文件本身 */
export default createContentLoader('daily/p/*.md', {
  render: true,
  transform(raw) {
    return raw
      .sort(
        (a, b) =>
          new Date(b.frontmatter?.date || 0) - new Date(a.frontmatter?.date || 0)
      )
      .map(({ url, frontmatter, html }) => {
        const date = formatDate(frontmatter?.date)
        return {
          url,
          title: frontmatter?.title || `生活手记 · ${date}`,
          date,
          day: date.slice(8, 10),
          yearMonth: date.slice(0, 7),
          tags: Array.isArray(frontmatter?.tags) ? frontmatter.tags : [],
          preview: frontmatter?.description || stripHtml(html).slice(0, 180),
          minutes: readMinutes(html)
        }
      })
  }
})

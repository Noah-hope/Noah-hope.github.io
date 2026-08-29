import { createContentLoader } from 'vitepress'

function formatDate(d) {
  const date = new Date(d)
  if (isNaN(date.getTime())) return ''
  return date.toISOString().slice(0, 10)
}

/** 博客文章数据：blog/posts/ 下的文章按日期倒序输出 */
export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .sort(
        (a, b) =>
          new Date(b.frontmatter?.date || 0) - new Date(a.frontmatter?.date || 0)
      )
      .map(({ url, frontmatter, excerpt }) => ({
        url,
        title: frontmatter?.title || url,
        date: formatDate(frontmatter?.date),
        tags: Array.isArray(frontmatter?.tags) ? frontmatter.tags : [],
        excerpt
      }))
  }
})

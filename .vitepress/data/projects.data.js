import { createContentLoader } from 'vitepress'

const STATUS_MAP = {
  active: { label: '进行中', badge: 'tip' },
  planned: { label: '计划中', badge: 'warning' },
  done: { label: '已完成', badge: 'tip' },
  paused: { label: '已搁置', badge: 'danger' }
}

/** 项目数据：projects/ 下每个 md 是一个项目，详情页即该文件本身 */
export default createContentLoader('projects/*.md', {
  transform(raw) {
    return raw
      .filter(({ url, frontmatter }) => !url.endsWith('/') && !frontmatter?.draft)
      .map(({ url, frontmatter }) => {
        const status = STATUS_MAP[frontmatter?.status] || STATUS_MAP.active
        return {
          url,
          title: frontmatter?.title || url,
          icon: frontmatter?.icon || '📦',
          desc: frontmatter?.desc || '',
          tech: Array.isArray(frontmatter?.tech) ? frontmatter.tech : [],
          site: frontmatter?.site || '',
          repo: frontmatter?.repo || '',
          statusLabel: status.label,
          statusBadge: status.badge,
          date: frontmatter?.date || ''
        }
      })
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
  }
})

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Noah',
  description: 'Noah 的个人站——记录日常、分享项目、输出文档',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/noah-app-icon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/noah-app-icon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700;900&display=swap'
      }
    ]
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '日常', link: '/daily/' },
      { text: '项目', link: '/projects/' },
      { text: '博客', link: '/blog/' },
      { text: '关于我', link: '/about' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Noah-hope' }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文章', buttonAriaLabel: '搜索文章' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清空关键词',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    outline: { level: [2, 3], label: '本页目录' },
    lastUpdated: { text: '最后更新于' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 Noah'
    }
  }
})

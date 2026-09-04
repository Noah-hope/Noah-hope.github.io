---
layout: page
title: 项目
---

<main class="listing-page projects-page">
  <header class="listing-hero">
    <h1>项目</h1>
    <p>这是一个项目展示页。</p>
  </header>
  <ProjectCards />
</main>

<!--
如何添加新项目：
1. 在 projects/ 目录下新建一个 md 文件（如 my-app.md），它就是项目详情页
2. frontmatter 参考模板：
   ---
   title: 项目名称
   icon: ✨           # emoji 或图片 URL，显示在卡片顶部
   desc: 一句话简介（卡片上显示）
   tech:
     - Vue 3
     - Vite
   status: active   # active=进行中 / planned=计划中 / done=已完成 / paused=已搁置
   date: 2026-08-29 # 用于卡片排序
   site: https://example.com
   repo: https://github.com/your-name/your-project
   ---
3. 正文里写项目详细介绍，并放上仓库链接
4. 也可以直接复制 example-project.md 改
-->

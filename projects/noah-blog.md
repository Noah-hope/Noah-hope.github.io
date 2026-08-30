---
title: Noah-Blog 个人站
icon: 🌐
desc: 我的个人主页，同时也是博客——一个集日常记录、项目展示和技术沉淀于一体的个人站点。
tech:
  - VitePress
  - Vue 3
  - GitHub Actions
  - GitHub Pages
status: active
date: 2026-08-29
site: https://noah-hope.github.io/
repo: https://github.com/Noah-hope/Noah-hope.github.io
---

## 项目介绍

你现在看到的这个网站就是本项目的成果 🎉

它是一个纯静态个人站，包含四个板块：

- 🌤️ **日常**：朋友圈式卡片流，随手记录生活
- 🛠️ **项目**：卡片列表 + 站内详情页（就是本页）
- 📝 **博客**：学习笔记与文档输出
- 👋 **关于我**：个人介绍

## 技术方案

- **框架**：[VitePress](https://vitepress.dev/zh/)（Vite + Vue 3 生态的静态站点生成器）
- **数据驱动**：通过 VitePress 数据加载器（`createContentLoader`）把 Markdown 文件自动渲染成日常卡片流和项目卡片
- **部署**：推送到 GitHub 后由 GitHub Actions 自动构建，发布到 GitHub Pages
- **内置能力**：Ctrl+K 全文搜索、暗色模式、响应式布局

## 链接

- **源码仓库**：[github.com/Noah-hope/Noah-hope.github.io](https://github.com/Noah-hope/Noah-hope.github.io)
- **在线地址**：[noah-hope.github.io](https://noah-hope.github.io/)

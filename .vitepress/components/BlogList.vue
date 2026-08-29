<script setup>
import { data as posts } from '../data/blog.data.js'
</script>

<template>
  <div class="blog-list">
    <a v-for="p in posts" :key="p.url" :href="p.url" class="post-card">
      <div class="post-meta">
        <span>{{ p.date }}</span>
        <span v-for="t in p.tags" :key="t" class="post-tag">{{ t }}</span>
      </div>
      <h3>{{ p.title }}</h3>
      <div v-if="p.excerpt" class="post-excerpt" v-html="p.excerpt"></div>
    </a>
    <p v-if="!posts.length" style="color: var(--vp-c-text-3)">
      还没有文章。在 blog/posts/ 目录下新建 md 文件即可发布。
    </p>
  </div>
</template>

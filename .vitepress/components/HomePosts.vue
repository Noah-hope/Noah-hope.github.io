<script setup>
import { data as posts } from '../data/blog.data.js'

const recent = posts.slice(0, 3)
</script>

<template>
  <div class="blog-list">
    <a v-for="p in recent" :key="p.url" :href="p.url" class="post-card">
      <div class="post-meta">
        <span>{{ p.date }}</span>
        <span class="dot">·</span>
        <span>{{ p.minutes }} min</span>
      </div>
      <h3>{{ p.title }}</h3>
      <div v-if="p.excerpt" class="post-excerpt" v-html="p.excerpt"></div>
    </a>
    <p v-if="!recent.length" class="empty-tip">还没有文章。</p>
  </div>
</template>

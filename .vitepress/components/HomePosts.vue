<script setup>
import { data as posts } from '../data/blog.data.js'

const recent = posts.slice(0, 3)
</script>

<template>
  <div class="home-posts">
    <a v-for="(p, i) in recent" :key="p.url" :href="p.url" class="home-post-card"
       :style="{ animationDelay: `${i * 90}ms` }">
      <span class="home-post-number">0{{ i + 1 }}</span>
      <div class="home-post-main">
        <div class="home-post-meta">
          <time>{{ p.date }}</time><span>{{ p.minutes }} MIN READ</span>
        </div>
        <h3>{{ p.title }}</h3>
        <p v-if="p.summary">{{ p.summary }}</p>
        <div class="home-post-tags">
          <span v-for="t in p.tags" :key="t"># {{ t }}</span>
        </div>
      </div>
      <span class="card-arrow">↗</span>
    </a>
    <p v-if="!recent.length" class="empty-tip">还没有文章。</p>
  </div>
</template>

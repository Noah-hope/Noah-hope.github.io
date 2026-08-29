<script setup>
import { computed } from 'vue'
import { data as posts } from '../data/blog.data.js'

const props = defineProps({
  limit: { type: Number, default: 0 }
})

const list = computed(() => (props.limit > 0 ? posts.slice(0, props.limit) : posts))

/** 按年份分组，保持倒序 */
const groups = computed(() => {
  const map = new Map()
  for (const p of list.value) {
    if (!map.has(p.year)) map.set(p.year, [])
    map.get(p.year).push(p)
  }
  return [...map.entries()].map(([year, items]) => ({ year, items }))
})
</script>

<template>
  <div>
    <section v-for="g in groups" :key="g.year" class="year-group">
      <h2 class="year-label">
        {{ g.year }}
        <small>{{ g.items.length }} 篇</small>
      </h2>
      <div class="blog-list">
        <a v-for="p in g.items" :key="p.url" :href="p.url" class="post-card">
          <div class="post-meta">
            <span>{{ p.date }}</span>
            <span class="dot">·</span>
            <span>{{ p.minutes }} min</span>
            <span v-for="t in p.tags" :key="t" class="post-tag">#{{ t }}</span>
          </div>
          <h3>{{ p.title }}</h3>
          <div v-if="p.excerpt" class="post-excerpt" v-html="p.excerpt"></div>
        </a>
      </div>
    </section>
    <p v-if="!posts.length" class="empty-tip">
      还没有文章。在 blog/posts/ 目录下新建 md 文件即可发布。
    </p>
  </div>
</template>

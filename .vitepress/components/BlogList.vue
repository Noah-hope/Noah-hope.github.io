<script setup>
import { computed, ref } from 'vue'
import { data as posts } from '../data/blog.data.js'

const props = defineProps({
  limit: { type: Number, default: 0 },
  showCount: { type: Boolean, default: true }
})

const query = ref('')
const list = computed(() => (props.limit > 0 ? posts.slice(0, props.limit) : posts))
const filtered = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  if (!keyword) return list.value
  return list.value.filter((post) =>
    [post.title, post.summary, ...post.tags].join(' ').toLowerCase().includes(keyword)
  )
})

const groups = computed(() => {
  const map = new Map()
  for (const post of filtered.value) {
    if (!map.has(post.year)) map.set(post.year, [])
    map.get(post.year).push(post)
  }
  return [...map.entries()].map(([year, items]) => ({ year, items }))
})
</script>

<template>
  <div class="post-flow">
    <div class="flow-toolbar">
      <p v-if="showCount">
        共 {{ posts.length }} 篇
      </p>
      <label class="article-search">
        <span>⌕</span>
        <input v-model="query" type="search" placeholder="搜索标题、摘要或标签" />
      </label>
    </div>

    <section v-for="group in groups" :key="group.year" class="year-block">
      <aside class="year-aside">
        <span class="year-num">{{ group.year }}</span>
        <span class="year-count">{{ group.items.length }} 篇沉淀</span>
      </aside>
      <div class="year-items">
        <a v-for="(post, index) in group.items" :key="post.url" :href="post.url" class="post-row"
           :style="{ animationDelay: `${Math.min(index, 8) * 70}ms` }">
          <div class="post-row-meta">
            <time>{{ post.date }}</time>
            <span>约 {{ post.minutes }} 分钟</span>
          </div>
          <h3 class="post-row-title">{{ post.title }}</h3>
          <p v-if="post.summary" class="post-row-excerpt">{{ post.summary }}</p>
          <div class="post-row-bottom">
            <div><span v-for="tag in post.tags" :key="tag" class="post-tag"># {{ tag }}</span></div>
            <span class="row-arrow">阅读全文 <i>→</i></span>
          </div>
        </a>
      </div>
    </section>

    <p v-if="!filtered.length" class="empty-tip">没有找到匹配的文章。</p>
  </div>
</template>

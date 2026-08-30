<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { frontmatter } = useData()
const route = useRoute()
const isDaily = computed(() => route.path.startsWith('/daily/p/'))
const isBlog = computed(() => route.path.startsWith('/blog/posts/'))
const isArticle = computed(() => isDaily.value || isBlog.value)

const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(date)
}
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <header v-if="isArticle" class="article-hero">
        <a :href="isDaily ? '/daily/' : '/blog/'" class="article-back">← {{ isDaily ? '返回日常' : '返回博客' }}</a>
        <p class="article-eyebrow">{{ isDaily ? 'LIFE · MOMENT' : 'LEARN · BUILD · SHARE' }}</p>
        <h1>{{ frontmatter.title || (isDaily ? '生活手记' : '技术文章') }}</h1>
        <p v-if="frontmatter.description" class="article-description">{{ frontmatter.description }}</p>
        <div class="article-meta">
          <time>{{ formatDate(frontmatter.date) }}</time>
          <span v-for="tag in (frontmatter.tags || [])" :key="tag"># {{ tag }}</span>
        </div>
      </header>
    </template>
  </DefaultTheme.Layout>
</template>

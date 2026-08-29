<script setup>
import { data as moments } from '../data/daily.data.js'

const recent = moments.slice(0, 3)
</script>

<template>
  <div class="cards">
    <a v-for="m in recent" :key="m.url" :href="m.url" class="card">
      <span class="card-date">{{ m.date }}</span>
      <p class="card-text">{{ m.preview }}</p>
      <span class="card-more">阅读全文 →</span>
    </a>
    <p v-if="!recent.length" style="color: var(--vp-c-text-3)">还没有动态。</p>
  </div>
</template>

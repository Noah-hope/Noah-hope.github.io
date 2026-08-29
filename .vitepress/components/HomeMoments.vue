<script setup>
import { data as moments } from '../data/daily.data.js'

const recent = moments.slice(0, 3)
</script>

<template>
  <div class="daily-feed">
    <article v-for="m in recent" :key="m.url" class="moment">
      <div class="moment-date">{{ m.date }}</div>
      <div class="moment-body" v-html="m.html"></div>
    </article>
    <p v-if="!recent.length" style="color: var(--vp-c-text-3)">
      还没有动态。
    </p>
  </div>
</template>

<script setup>
import { data as moments } from '../data/daily.data.js'

const recent = moments.slice(0, 3)
</script>

<template>
  <div class="home-moments">
    <a v-for="(m, i) in recent" :key="m.url" :href="m.url" class="home-moment-card"
       :style="{ animationDelay: `${i * 90}ms` }">
      <div class="moment-date"><strong>{{ m.day }}</strong><span>{{ m.yearMonth }}</span></div>
      <div class="moment-copy">
        <h3>{{ m.title }}</h3>
        <p>{{ m.preview }}</p>
      </div>
      <span class="card-arrow"><img src="/icons/arrow-forward.svg" alt="" /></span>
    </a>
    <p v-if="!recent.length" class="empty-tip">还没有动态。</p>
  </div>
</template>

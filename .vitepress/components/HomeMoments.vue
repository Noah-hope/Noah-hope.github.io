<script setup>
import { data as moments } from '../data/daily.data.js'

const recent = moments.slice(0, 3)
</script>

<template>
  <div class="moments">
    <a
      v-for="(m, i) in recent"
      :key="m.url"
      :href="m.url"
      class="moment-card"
      :style="{ animationDelay: `${i * 60}ms` }"
    >
      <div class="moment-head">
        <img class="moment-avatar" src="/avatar.svg" alt="Noah" />
        <div>
          <div class="moment-name">Noah</div>
          <div class="moment-time">{{ m.date }}</div>
        </div>
      </div>
      <p class="moment-text">{{ m.preview }}</p>
      <span class="moment-more">阅读全文 →</span>
    </a>
    <p v-if="!recent.length" class="empty-tip">还没有动态。</p>
  </div>
</template>

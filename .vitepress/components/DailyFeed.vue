<script setup>
import { data as moments } from '../data/daily.data.js'

const props = defineProps({
  limit: { type: Number, default: 0 }
})

const list = props.limit > 0 ? moments.slice(0, props.limit) : moments
</script>

<template>
  <div class="moments">
    <a
      v-for="(m, i) in list"
      :key="m.url"
      :href="m.url"
      class="moment-card"
      :style="{ animationDelay: `${Math.min(i, 8) * 60}ms` }"
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
    <p v-if="!moments.length" class="empty-tip">
      还没有动态。在 daily/p/ 目录下新建一个 md 文件即可发布第一条动态。
    </p>
  </div>
</template>

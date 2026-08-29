<script setup>
import { data as moments } from '../data/daily.data.js'
</script>

<template>
  <div class="cards">
    <a v-for="m in moments" :key="m.url" :href="m.url" class="card">
      <span class="card-date">{{ m.date }}</span>
      <p class="card-text">{{ m.preview }}</p>
      <span class="card-more">阅读全文 →</span>
    </a>
    <p v-if="!moments.length" style="color: var(--vp-c-text-3)">
      还没有动态。在 daily/p/ 目录下新建一个 md 文件即可发布第一条动态。
    </p>
  </div>
</template>

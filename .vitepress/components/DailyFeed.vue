<script setup>
import { data as moments } from '../data/daily.data.js'
</script>

<template>
  <div class="daily-feed">
    <article v-for="m in moments" :key="m.url" class="moment">
      <div class="moment-date">{{ m.date }}</div>
      <div class="moment-body" v-html="m.html"></div>
    </article>
    <p v-if="!moments.length" style="color: var(--vp-c-text-3)">
      还没有动态。在 daily/p/ 目录下新建一个 md 文件即可发布第一条动态。
    </p>
  </div>
</template>

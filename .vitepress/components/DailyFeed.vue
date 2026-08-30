<script setup>
import { data as moments } from '../data/daily.data.js'

const props = defineProps({
  limit: { type: Number, default: 0 },
  showCount: { type: Boolean, default: true }
})

const list = props.limit > 0 ? moments.slice(0, props.limit) : moments
</script>

<template>
  <div class="daily-feed">
    <p v-if="showCount" class="flow-count">共 {{ moments.length }} 篇</p>
    <ol class="daily-list">
      <li v-for="(moment, index) in list" :key="moment.url" class="feed-li"
          :style="{ animationDelay: `${Math.min(index, 8) * 80}ms` }">
        <a :href="moment.url" class="daily-card">
          <div class="daily-date"><strong>{{ moment.day }}</strong><span>{{ moment.yearMonth }}</span></div>
          <div class="daily-card-body">
            <h2>{{ moment.title }}</h2>
            <p>{{ moment.preview }}</p>
            <div class="daily-card-footer">
              <div><span v-for="tag in moment.tags" :key="tag"># {{ tag }}</span></div>
              <span>打开这段记忆 <i>→</i></span>
            </div>
          </div>
        </a>
      </li>
    </ol>
    <p v-if="!moments.length" class="empty-tip">还没有日常文章。</p>
  </div>
</template>

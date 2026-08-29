<script setup>
import { data as projects } from '../data/projects.data.js'
</script>

<template>
  <div class="cards">
    <a v-for="p in projects" :key="p.url" :href="p.url" class="card">
      <div class="card-head">
        <h3 class="card-title">{{ p.title }}</h3>
        <span class="card-badge" :class="p.statusBadge">{{ p.statusLabel }}</span>
      </div>
      <p class="card-text">{{ p.desc }}</p>
      <div v-if="p.tech.length" class="tech-chips">
        <span v-for="t in p.tech" :key="t" class="tech-chip">{{ t }}</span>
      </div>
      <span class="card-more">查看详情 →</span>
    </a>
    <p v-if="!projects.length" style="color: var(--vp-c-text-3)">
      还没有项目。在 projects/ 目录下新建 md 文件即可添加。
    </p>
  </div>
</template>

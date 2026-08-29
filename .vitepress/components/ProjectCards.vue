<script setup>
import { data as projects } from '../data/projects.data.js'
</script>

<template>
  <div class="project-grid">
    <a v-for="p in projects" :key="p.url" :href="p.url" class="project-cell">
      <h3 class="p-title">
        {{ p.title }}
        <span class="p-status" :class="p.statusBadge">{{ p.statusLabel }}</span>
      </h3>
      <p class="p-desc">{{ p.desc }}</p>
      <div v-if="p.tech.length" class="tech-chips">
        <span v-for="t in p.tech" :key="t" class="tech-chip">{{ t }}</span>
      </div>
    </a>
    <p v-if="!projects.length" class="empty-tip">
      还没有项目。在 projects/ 目录下新建 md 文件即可添加。
    </p>
  </div>
</template>

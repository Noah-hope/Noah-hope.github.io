<script setup>
import { data as projects } from '../data/projects.data.js'

defineProps({ showCount: { type: Boolean, default: true } })
</script>

<template>
  <div class="shop">
    <p v-if="showCount" class="flow-count">共 {{ projects.length }} 个公开项目</p>
    <div class="shop-grid">
      <article v-for="(project, index) in projects" :key="project.url" class="shop-card"
               :style="{ animationDelay: `${index * 80}ms` }">
        <div class="shop-card-top">
          <span class="shop-icon">{{ project.icon }}</span>
          <span class="p-status" :class="project.statusBadge">{{ project.statusLabel }}</span>
        </div>
        <a :href="project.url" class="shop-title">{{ project.title }}</a>
        <p class="shop-desc">{{ project.desc }}</p>
        <div v-if="project.tech.length" class="tech-chips">
          <span v-for="tech in project.tech" :key="tech" class="tech-chip">{{ tech }}</span>
        </div>
        <div class="shop-actions">
          <a v-if="project.site" :href="project.site" target="_blank" rel="noopener">访问站点 <span>↗</span></a>
          <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener">项目仓库 <span>↗</span></a>
          <a v-if="!project.site && !project.repo" :href="project.url">查看详情 <span>→</span></a>
        </div>
      </article>
    </div>
    <p v-if="!projects.length" class="empty-tip">还没有公开项目。</p>
  </div>
</template>

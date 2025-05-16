<template>
  <div class="p-6 w-full max-w-sm">
    <p class="text-gray-500 text-sm">Unique visitors</p>
    <p class="text-4xl font-bold text-gray-900 mt-2">{{ total.toLocaleString() }}</p>

    <!-- 动态彩条 -->
    <div class="mt-3 flex h-3 w-full rounded-full bg-gray-200 overflow-hidden">
      <template v-for="(segment, index) in progress" :key="index">
        <div
          class="h-full"
          :style="{
            width: getPercentage(segment.value),
            backgroundColor: segment.color,
            marginLeft: index !== 0 ? '2px' : '0'
          }"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProgressSegment {
  value: number
  color: string
}

const props = defineProps<{
  progress: ProgressSegment[]
}>()

const total = computed(() => props.progress.reduce((sum, segment) => sum + segment.value, 0))

const getPercentage = (value: number) => {
  const percent = (value / total.value) * 100
  return `${percent}%`
}
</script>

<style scoped></style>

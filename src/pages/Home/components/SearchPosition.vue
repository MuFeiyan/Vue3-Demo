<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center justify-between py-3 border-b last:border-b-0"
    >
      <span class="text-blue-500 font-medium">{{ item.keyword }}</span>
      <div class="flex items-center space-x-2">
        <span class="text-gray-800 font-semibold text-lg">{{ item.value.toLocaleString() }}</span>
        <div class="p-1">
          <el-icon color="#3b82f6"><Top /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Top } from '@element-plus/icons-vue'
interface KeywordItem {
  keyword: string
  value: number
}

const items: KeywordItem[] = [
  { keyword: 'dermatology', value: 6721 },
  { keyword: 'botox', value: 4320 }
]
</script>

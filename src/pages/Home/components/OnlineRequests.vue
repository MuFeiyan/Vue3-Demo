<template>
  <div class="flex flex-col items-center">
    <!-- 外部图表容器，设置 relative -->
    <div class="relative w-40 h-40">
      <!-- 中间图标与数字 -->
      <div class="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <el-icon :size="40" color="#77a8f9"><DataAnalysis /></el-icon>
        <div class="text-2xl font-bold text-gray-800">9,245</div>
        <div class="text-sm text-gray-500">Requests</div>
      </div>
      <!-- ECharts 图表容器 -->
      <div ref="chartRef" class="w-full h-full z-0"></div>
    </div>
    <!-- 图例 -->
    <div class="flex justify-between w-full mt-4 text-sm text-gray-600 px-2">
      <div class="flex items-center space-x-1">
        <span class="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
        <span>New:</span>
        <span class="font-medium text-gray-800">6.9k</span>
      </div>
      <div class="flex items-center space-x-1">
        <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
        <span>Returning:</span>
        <span class="font-medium text-gray-800">3.1k</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { DataAnalysis } from '@element-plus/icons-vue'
const chartRef = ref<null>(null)

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value)
    chart.setOption({
      title: {
        left: 'center',
        top: '45%',
        textStyle: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#111'
        },
        subtextStyle: {
          fontSize: 14,
          color: '#666'
        }
      },
      series: [
        // 底层灰色环（细）
        {
          type: 'pie',
          radius: ['92%', '95%'], // 更细
          silent: true, // 不响应鼠标事件
          label: { show: false },
          labelLine: { show: false },
          data: [
            {
              value: 100,
              itemStyle: {
                color: '#E5E7EB' // 灰色
              }
            }
          ],
          z: 1 // 放在下面
        },
        // 上层蓝色进度环（粗）
        {
          type: 'pie',
          radius: ['90%', '100%'], // 正常宽度
          avoidLabelOverlap: false,
          label: { show: false },
          labelLine: { show: false },
          data: [
            {
              value: 6900,
              itemStyle: {
                color: '#3B82F6' // 蓝色
              }
            },
            {
              value: 3100,
              itemStyle: {
                color: 'transparent' // 隐藏未完成部分
              }
            }
          ],
          z: 2 // 放在上层
        }
      ]
    })
  }
})
</script>

<style scoped>
/* Prevent inner circle from overlapping chart */
.echarts {
  z-index: 0;
}
</style>

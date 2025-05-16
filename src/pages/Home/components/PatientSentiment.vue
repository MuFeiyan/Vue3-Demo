<template>
  <div class="p-4 w-full flex flex-col items-center">
    <!-- 仪表盘图表 -->
    <div ref="chartRef" class="w-full h-[160px]" />

    <!-- 中间图标和文字 -->
    <div class="-mt-32 flex flex-col items-center">
      <div
        class="w-14 h-14 border-2 border-dotted border-[#34d399] rounded-full flex items-center justify-center text-white text-2xl"
      >
        <el-icon :size="30" color="#34d399"><Sunny /></el-icon>
      </div>
      <p class="text-green-500 font-semibold mt-2">Superb!</p>
    </div>

    <!-- 底部文字 -->
    <p class="mt-2 ml-1 text-gray-800 text-lg font-semibold">
      <span class="text-2xl font-bold text-gray-900">91%</span>
      <span class="text-sm font-medium text-gray-500">
        of patients satisfied with their visit.</span
      >
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { Sunny } from '@element-plus/icons-vue'
const chartRef = ref(null)

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  chart.setOption({
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 0,
        radius: '100%',
        center: ['50%', '50%'],
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.91, '#34d399'], // teal-400
              [1, '#e5e7eb'] // gray-200
            ]
          }
        },
        pointer: {
          show: false
        },
        progress: {
          show: false
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        detail: { show: false },
        data: [{ value: 91 }]
      }
    ]
  })
})
</script>

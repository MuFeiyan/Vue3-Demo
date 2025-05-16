<template>
  <div class="p-4 flex flex-col justify-between">
    <div class="mb-4">
      <div class="text-2xl font-bold text-gray-900 flex items-center">
        4.0
        <span class="text-yellow-400 text-lg ml-2">⭐⭐⭐⭐☆</span>
      </div>
      <p class="text-xs text-green-500 mt-1">+0.5 point from last month</p>
    </div>
    <div class="text-sm text-gray-700 mb-2">
      3.6 <span class="text-xs text-gray-400 ml-1">July 2019</span>
    </div>
    <div ref="chartRef" class="w-full h-[100px]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  chart.setOption({
    grid: { top: 10, bottom: 30, left: 30, right: 10 },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Mar', 'Jul', 'Sep', 'Nov', 'Dec'],
      axisLine: { show: false },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    series: [
      {
        data: [2.0, 3.6, 3.2, 4.0, 4.1, 4.0],
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#5A9BFF'
        },
        lineStyle: {
          width: 3
        },
        symbolSize: 1
      }
    ]
  })
})
</script>

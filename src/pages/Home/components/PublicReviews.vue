<template>
  <div class="p-6 w-full">
    <!-- 顶部指标 -->
    <div class="flex justify-between items-center mb-2">
      <div>
        <p class="text-sm text-gray-500">Total Reviews {{ commonInfo.menuCollapse }}</p>
        <p class="text-xl font-bold text-gray-900">3,431</p>
      </div>
      <div class="text-right">
        <p class="text-sm text-green-400 font-medium">Since PatientPop</p>
        <p class="text-xl font-bold text-green-500">+1,725</p>
      </div>
    </div>

    <!-- 图表 -->
    <div ref="chartRef" class="w-full h-[130px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, markRaw } from 'vue'
import * as echarts from 'echarts'
import { useCommonInfo } from '@/store/commonInfo'
import { useWindowResize } from '@/composables/useWindowResize'
const chartRef = ref(null)
const chart = ref(null)
const commonInfo = useCommonInfo()
watch(
  () => commonInfo.menuCollapse,
  async () => {
    await nextTick()
    //nextTick() 只等待 Vue 渲染完成，但容器尺寸的变更可能是通过动画、CSS 过渡（如 Tailwind 的 transition-*）或外部布局系统触发的，它们完成的时机往往滞后于 nextTick()，使用setTimeout延迟以保证图表容器大小已更新完成。
    setTimeout(() => {
      chart.value?.resize()
    }, 220)
  }
)
onMounted(() => {
  // 使用 markRaw 标记 ECharts 实例，防止 Vue 的响应式代理干扰内部属性访问（Vue 的响应式代理会破坏 ECharts 内部对象结构（如 type 属性））
  chart.value = markRaw(echarts.init(chartRef.value))
  chart.value.setOption({
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['Reviews', 'Since PatientPop'],
      bottom: 0,
      textStyle: { fontSize: 12 }
    },
    grid: {
      top: 20,
      left: '3%',
      right: '4%',
      bottom: 40,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
      axisLabel: {
        color: '#10b981',
        fontWeight: '500'
      },
      axisLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      splitLine: {
        lineStyle: { color: '#f3f4f6' }
      }
    },
    series: [
      {
        name: 'Reviews',
        type: 'bar',
        data: [100, 200, 160, 300, 250, 240, 0, 0, 0, 0, 0, 0],
        itemStyle: {
          color: '#d1d5db' // gray-300
        },
        barGap: '50%'
      },
      {
        name: 'Since PatientPop',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0, 310, 280, 360, 300, 360, 400],
        itemStyle: {
          color: '#10b981' // emerald-500
        }
      }
    ]
    // graphic: {
    //   elements: [
    //     {
    //       type: 'image',
    //       style: {
    //         image: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
    //         width: 20,
    //         height: 20
    //       },
    //       left: '38.5%',
    //       top: '15%'
    //     }
    //   ]
    // }
  })
})
useWindowResize(chart)
onUnmounted(() => {
  chart.value?.dispose()
})
</script>

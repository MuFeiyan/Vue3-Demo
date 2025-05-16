import { onMounted, onUnmounted, Ref } from 'vue'

export function useWindowResize(chart: Ref) {
  let resizeTimeout: number | null = null
  const listener = () => {
    if (resizeTimeout) clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      chart.value.resize()
    }, 200)
  }
  onMounted(() => {
    window.addEventListener('resize', listener)
  })
  onUnmounted(() => {
    if (resizeTimeout) clearTimeout(resizeTimeout)
    window.removeEventListener('resize', listener)
  })
}

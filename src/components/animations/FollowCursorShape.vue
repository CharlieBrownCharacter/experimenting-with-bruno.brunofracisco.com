<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, shallowRef, useTemplateRef, watch } from 'vue'

const props = defineProps<{
  cols: number
  rows: number
  arrowWidth: number
  arrowHeight: number
  distancePull: number
}>()

const linesRef = useTemplateRef<HTMLDivElement[]>('linesRef')
const linesPositions = ref<DOMRect[]>([])

const mouse = shallowRef({ x: 0, y: 0 })

const updateMouse = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

onMounted(() => {
  if (!linesRef.value) return

  window.addEventListener('mousemove', updateMouse)

  linesPositions.value = linesRef.value.map((el) => el.getBoundingClientRect())
})

onUnmounted(() => window.removeEventListener('mousemove', updateMouse))

const getRotation = (index: number) => {
  const rect = linesPositions.value[index]

  if (!rect) return 0

  const dx = mouse.value.x - (rect.left + rect.width / 2)
  const dy = mouse.value.y - (rect.top + rect.height / 2)

  return Math.atan2(dy, dx) * (180 / Math.PI) - 90
}

const getScale = (index: number) => {
  const rect = linesPositions.value[index]

  if (!rect) return 1

  const dx = mouse.value.x - (rect.left + rect.width / 2)
  const dy = mouse.value.y - (rect.top + rect.height / 2)
  const distance = Math.sqrt(dx * dx + dy * dy)

  const scale = 1 - Math.min(distance / props.distancePull, 1) * 0.95

  return Math.max(scale, 0.01)
}

watch([() => props.cols, () => props.rows], () => {
  nextTick(() => {
    if (!linesRef.value) return

    linesPositions.value = linesRef.value.map((el) => el.getBoundingClientRect())
  })
})
</script>

<template>
  <div
    class="grid gap-y-2 justify-items-center"
    :style="{
      'grid-template-columns': `repeat(${cols}, minmax(0, 1fr))`,
    }"
    :key="`${cols}-${rows}`"
  >
    <div
      ref="linesRef"
      v-for="index in cols * rows"
      :key="index"
      class="h-8 w-0.5 origin-left"
      :style="{
        width: `${arrowWidth}px`,
        height: `${arrowHeight}px`,
        backgroundColor: `hsl(${(index / (20 * 4)) * 360}, 100%, 50%)`,
        transform: `rotate(${getRotation(index - 1)}deg) scaleY(${getScale(index - 1)})`,
      }"
    />
  </div>
</template>

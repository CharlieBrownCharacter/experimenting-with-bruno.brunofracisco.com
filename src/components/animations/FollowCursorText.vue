<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in iaculis dolor. Donec condimentum nec elit tempus pretium. In a fermentum elit. Nunc efficitur ante in diam rutrum fermentum. Curabitur lobortis urna vel feugiat condimentum. Nam mollis vestibulum magna, ut aliquet urna volutpat sed. Vivamus placerat ante eget velit aliquet, sit amet tristique ante dictum. Ut viverra vehicula feugiat. Donec eget ex ut ligula euismod tincidunt vel in urna. Maecenas eu metus at mi egestas sagittis. Duis augue orci, ullamcorper quis eros ut, euismod ultricies tortor.'

const letters = computed(() => text.split(''))

const mouse = ref({ x: 0, y: 0 })
const letterPositions = ref<DOMRect[]>([])

const lettersRef = useTemplateRef<HTMLSpanElement[]>('lettersRef')

const updateMouse = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

onMounted(() => {
  if (!lettersRef.value) return

  window.addEventListener('mousemove', updateMouse)

  letterPositions.value = lettersRef.value.map((el) => el.getBoundingClientRect())
})

onUnmounted(() => window.removeEventListener('mousemove', updateMouse))

const getRotation = (index: number) => {
  const rect = letterPositions.value[index]

  if (!rect) return 0

  const dx = mouse.value.x - (rect.left + rect.width / 2)
  const dy = mouse.value.y - (rect.top + rect.height / 2)

  return Math.atan2(dy, dx) * (180 / Math.PI)
}
</script>

<template>
  <div>
    <span
      ref="lettersRef"
      class="inline-block letter"
      v-for="(letter, index) in letters"
      :style="{ transform: `rotate(${getRotation(index)}deg)` }"
      :key="letter"
    >
      {{ letter }}
    </span>
  </div>
</template>

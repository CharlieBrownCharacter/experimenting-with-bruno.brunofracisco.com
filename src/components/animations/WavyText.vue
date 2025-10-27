<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils.ts'

const props = withDefaults(
  defineProps<{
    text: string
    id?: string | number
    class?: HTMLAttributes['class']
  }>(),
  {
    id: Math.random(),
  },
)

const letters = computed(() => props.text.split(''))
</script>

<template>
  <div
    :class="
      cn(
        'scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-10xl overflow-hidden',
        props.class,
      )
    "
    :key="id"
  >
    <div class="text">
      <span
        v-for="(letter, i) in letters"
        :style="`--delay: ${i * 100}ms`"
        :key="i"
        style="white-space: pre"
      >
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.text span {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  animation: slideUp 0.6s ease forwards;
  animation-delay: var(--delay);
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

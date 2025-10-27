<script setup lang="ts">
const { as = 'article' } = defineProps<{ as?: string }>()
</script>

<template>
  <component
    :is="as"
    class="card overflow-hidden bg-card text-card-foreground flex flex-col rounded-sm border shadow-sm p-2"
  >
    <slot />
  </component>
</template>

<style>
.card {
  --border-angle: 0deg;
  border-radius: var(--card-animated-border-radius, 4px);
  animation: border-angle-rotate var(--card-animated-speed, 4s) infinite linear;
  border: var(--card-animated-border, 1px) solid transparent;
  position: relative;
  background:
    linear-gradient(var(--card-animated-background, white), var(--card-animated-background, white))
      padding-box,
    conic-gradient(
        from var(--border-angle) at 10% 80%,
        transparent,
        var(--card-animated-light-color, orange)
      )
      border-box;
}

@keyframes border-angle-rotate {
  from {
    --border-angle: 0deg;
  }
  to {
    --border-angle: 360deg;
  }
}

@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
</style>

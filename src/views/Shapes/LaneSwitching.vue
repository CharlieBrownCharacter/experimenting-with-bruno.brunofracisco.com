<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import LaneSwitching from '@/components/animations/LaneSwitching.vue'
</script>

<template>
  <div>
    <NavigationHeader />

    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Lane switching</h1>

    <p class="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
      Interactive lanes (shapes) that changes when you click on the shape
    </p>

    <div class="border p-2 h-40 rounded-lg my-4 grid place-items-center">
      <LaneSwitching :lane-height="80" :number-lanes="20" />
    </div>

    <div class="border p-2 h-40 rounded-lg my-4 grid place-items-center">
      <LaneSwitching :lane-height="80" :number-lanes="20" style="--bg-color: red" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationHeader from '@/components/NavigationHeader.vue'
import WavyText from '@/components/animations/WavyText.vue'

const id = ref(Math.random())
</script>

<template>
  <div>
    <NavigationHeader show-refresh-button @click:refresh="id = Math.random()" />

    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Wavy Text</h1>

    <p class="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
      interactive text animation where each letter appears one by one, rising from the bottom to
      form a smooth wave effect. This experiment highlights how individual elements can be
      manipulated independently while maintaining overall cohesion, and it serves as a simple
      example of combining programmatic logic with styling to achieve fluid, eye-catching effects on
      the web.
    </p>

    <div class="border p-2 rounded-lg my-4">
      <WavyText :id="id" text="This is a wavy text" />
    </div>

    <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">Code</h2>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 1235px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomponents%2Fanimations%2FWavyText.vue&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
    ></iframe>
  </div>
</template>

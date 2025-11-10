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

    <h2 class="scroll-m-20 text-xl font-semibold tracking-tight">Code</h2>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 1130px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomponents%2Fanimations%2FLaneSwitching.vue&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
    ></iframe>

    <h3 class="scroll-m-20 text-xl font-semibold tracking-tight">useTween</h3>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 752px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomposables%2FuseTween.ts&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
    ></iframe>

    <h3 class="scroll-m-20 text-xl font-semibold tracking-tight">useSpring</h3>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 1004px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomposables%2FuseSpring.ts&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
    ></iframe>
  </div>
</template>

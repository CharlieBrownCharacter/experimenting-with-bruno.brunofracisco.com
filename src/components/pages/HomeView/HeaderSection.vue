<script setup lang="ts">
function getStyle() {
  const randomInt = Math.random() * (0 - 30) + 0
  const isNegative = Math.random() < 0.5

  return { rotate: `${isNegative ? randomInt * -1 : randomInt}deg` }
}
</script>

<template>
  <section>
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl max-w-6xl flex gap-x-2 flex-wrap"
    >
      <span class="animate-in fade-in slide-in-from-top-8 duration-500">Welcome</span>
      <span
        class="animate-in fade-in slide-in-from-top-8 duration-500 delay-100 fill-mode-backwards"
      >
        to
      </span>
      <span
        class="animate-in fade-in slide-in-from-top-8 duration-500 delay-300 fill-mode-backwards mx-2"
      >
        <span class="inline-block" :style="getStyle()">e</span>
        <span class="inline-block" :style="getStyle()">x</span>
        <span class="inline-block" :style="getStyle()">p</span>
        <span class="inline-block" :style="getStyle()">e</span>
        <span class="inline-block" :style="getStyle()">r</span>
        <span class="inline-block" :style="getStyle()">i</span>
        <span class="inline-block" :style="getStyle()">m</span>
        <span class="inline-block" :style="getStyle()">e</span>
        <span class="inline-block" :style="getStyle()">n</span>
        <span class="inline-block" :style="getStyle()">t</span>
      </span>
      <span
        class="animate-in fade-in slide-in-from-top-8 duration-500 delay-400 fill-mode-backwards"
        >with</span
      >
      <span
        class="animate-in fade-in slide-in-from-top-8 duration-500 delay-500 fill-mode-backwards"
        >Bruno</span
      >
    </h1>

    <p class="text-xl text-muted-foreground animate-in fade-in duration-3000">
      Over here you will find experiments I do to learn new techniques and new concepts
    </p>
  </section>
</template>

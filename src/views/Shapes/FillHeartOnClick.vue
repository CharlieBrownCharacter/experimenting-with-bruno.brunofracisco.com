<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import { ref } from 'vue'
import ClickableHeart from '@/components/animations/ClickableHeart.vue'

const id = ref(Math.random())
const targetScale = ref(1)
const fillHeartScaleTarget = ref(0)

function onRefreshClick() {
  targetScale.value = 1
  fillHeartScaleTarget.value = 0
  id.value = Math.random()
}
</script>

<template>
  <div>
    <NavigationHeader show-refresh-button @click:refresh="onRefreshClick" />

    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Fill heart on click
    </h1>

    <p class="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
      Interactive heart where each click fills the heart from within. It explores SVG and how we can
      use
      <a
        class="underline"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/mask"
      >
        SVG's mask
      </a>
      element in combination with
      <a
        class="underline"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/linearGradient"
      >
        linear gradients.
      </a>

      <br />

      We also look at how we can use
      <a class="underline" href="https://en.wikipedia.org/wiki/Hooke%27s_law">Hooke law</a>
      in combination with
      <a
        class="underline"
        href="https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator"
      >
        Damped harmonic oscillator
      </a>
      to create a sprint effect just like
      <a class="underline" href="https://animejs.com/">animate.js</a>
      does it to fill our heart once it gets clicked. Credits to
      <a class="underline" href="https://www.joshwcomeau.com/">Josh Comeau</a> for this idea.
    </p>

    <div class="border p-4 rounded-lg my-4 flex justify-center bg-white items-center gap-4">
      <ClickableHeart
        v-model:fill-heart-scale-target="fillHeartScaleTarget"
        v-model:target-scale="targetScale"
      />

      <span class="font-semibold text-black">&lt;- Click</span>
    </div>

    <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">Code</h2>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 3419px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomponents%2Fanimations%2FClickableHeart.vue&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
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

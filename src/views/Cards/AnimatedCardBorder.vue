<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import CardAnimatedBorder from '@/components/animations/CardAnimatedBorder.vue'
</script>

<template>
  <div>
    <NavigationHeader />

    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Animated card border
    </h1>

    <p class="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
      an experiment that animates a glowing light running along the edges of a card, creating a
      moving border effect. Built with CSS and Vue.js, it explores gradient animation, masking, and
      timing to simulate light motion around a static shape. This project focuses on achieving
      smooth transitions, light alike flow, and responsive rendering, showing how minimal CSS can
      produce a high-impact visual effect that draws attention without relying on heavy graphics or
      libraries.
    </p>

    <div class="border p-2 rounded-lg my-4 gap-2 grid grid-cols-1 md:grid-cols-3">
      <CardAnimatedBorder
        style="
          --card-animated-speed: 8s;
          --card-animated-background: var(--background);
          --card-animated-light-color: red;
        "
      >
        <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Foo</h3>

        <p class="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero dui, ac porta
          nunc euismod tincidunt. Sed finibus nisi et felis rutrum pulvinar
        </p>
      </CardAnimatedBorder>

      <CardAnimatedBorder
        style="
          --card-animated-speed: 2s;
          --card-animated-background: var(--background);
          --card-animated-light-color: orange;
        "
      >
        <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Foo</h3>

        <p class="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero dui, ac porta
          nunc euismod tincidunt. Sed finibus nisi et felis rutrum pulvinar
        </p>
      </CardAnimatedBorder>

      <CardAnimatedBorder
        style="
          --card-animated-speed: 4s;
          --card-animated-background: var(--background);
          --card-animated-light-color: blue;
        "
      >
        <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Foo</h3>

        <p class="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero dui, ac porta
          nunc euismod tincidunt. Sed finibus nisi et felis rutrum pulvinar
        </p>
      </CardAnimatedBorder>
    </div>

    <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">Code</h2>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 1004px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomponents%2Fanimations%2FCardAnimatedBorder.vue&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
    ></iframe>
  </div>
</template>

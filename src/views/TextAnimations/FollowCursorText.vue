<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import FollowCursorText from '@/components/animations/FollowCursorText.vue'
</script>

<template>
  <div>
    <NavigationHeader />

    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Follow text cursor
    </h1>

    <p class="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
      Interactive letter rotation experiment where each character tilts toward the cursor.
    </p>

    <div class="border p-2 rounded-lg my-4">
      <FollowCursorText />
    </div>

    <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">Code</h2>

    <iframe
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 1130px"
      allow="clipboard-write"
      src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FCharlieBrownCharacter%2Fexperimenting-with-bruno.brunofracisco.com%2Fblob%2Fmaster%2Fsrc%2Fcomponents%2Fanimations%2FFollowCursorText.vue&style=a11y-dark&type=code&showLineNumbers=on&showFullPath=on&showCopy=on"
    ></iframe>
  </div>
</template>

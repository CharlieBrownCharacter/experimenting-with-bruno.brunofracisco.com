<script setup lang="ts">
import WavyText from '@/components/animations/WavyText.vue'
</script>

<template>
  <section>
    <h2
      class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 w-fit"
    >
      Text Experiments
    </h2>

    <p class="mt-1 text-muted-foreground">
      Anything related to text animations or text manipulation will be displayed here
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
      <RouterLink :to="{ name: 'textAnimations/WavyText' }">
        <article
          class="overflow-hidden bg-card text-card-foreground flex flex-col rounded-sm border shadow-sm p-2"
        >
          <WavyText class="text-2xl lg:text-4xl overflow-hidden my-4 h-10" text="Hello" />

          <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Wavy Text</h3>

          <p class="text-muted-foreground text-sm">
            an animation experiment where each letter rises from the bottom in sequence, creating a
            smooth wave-like motion across the text.
          </p>
        </article>
      </RouterLink>
    </div>
  </section>
</template>

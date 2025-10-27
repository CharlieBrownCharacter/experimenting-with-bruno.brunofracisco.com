<script setup lang="ts">
import WavyText from '@/components/animations/WavyText.vue'
import CardAnimatedBorder from '@/components/animations/CardAnimatedBorder.vue'
</script>

<template>
  <section>
    <h2
      class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 w-fit"
    >
      Card Experiments
    </h2>

    <p class="mt-1 text-muted-foreground">
      Anything related to card animations will be displayed here
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
      <RouterLink :to="{ name: 'cards/AnimateCardBorder' }">
        <article
          class="overflow-hidden bg-card text-card-foreground flex flex-col rounded-sm border shadow-sm p-2"
        >
          <CardAnimatedBorder
            class="my-4 h-10"
            style="
              --card-animated-speed: 4s;
              --card-animated-background: var(--background);
              --card-animated-light-color: gray;
            "
          >
            This is a card
          </CardAnimatedBorder>

          <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Card border</h3>

          <p class="text-muted-foreground text-sm">
            an animated glowing border effect built with CSS and Vue.js, using gradients and masking
            to simulate light motion around a card with smooth, responsive transitions.
          </p>
        </article>
      </RouterLink>
    </div>
  </section>
</template>

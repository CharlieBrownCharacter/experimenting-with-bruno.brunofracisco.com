<script setup lang="ts">
import { computed, ref } from 'vue'
import NavigationHeader from '@/components/NavigationHeader.vue'
import WavyText from '@/components/animations/WavyText.vue'
import WavyTextSourceRaw from '@/components/animations/WavyText.vue?raw'

const id = ref(Math.random())

const WavyTextSource = `&lt;script setup lang=&quot;ts&quot;&gt;
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps&lt;{
  text: string
}&gt;()

const letters = computed(() =&gt; props.text.split(''))
&lt;/script&gt;

&lt;template&gt;
  &lt;div
    class=&quot;scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-10xl overflow-hidden&quot;
  &gt;
    &lt;div class=&quot;text&quot;&gt;
      &lt;span
        v-for=&quot;(letter, i) in letters&quot;
        :style=&quot;{'--delay': i * 100}&quot;
        :key=&quot;i&quot;
        style=&quot;white-space: pre&quot;
      &gt;
        {{ letter }}
      &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.text span {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  animation: slideUp 0.6s ease forwards;
  animation-delay: var(--delay);
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
&lt;/style&gt;
`
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

    <pre
      v-html="WavyTextSource"
      class="mt-2 w-full max-w-full p-4 rounded-lg border border-zinc-700 bg-zinc-900 text-gray-100 overflow-x-auto font-mono text-sm shadow-sm"
    />
  </div>
</template>

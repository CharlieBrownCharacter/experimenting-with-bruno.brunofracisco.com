<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import FollowCursorText from '@/components/animations/FollowCursorText.vue'

const source = `
&lt;script setup lang=&quot;ts&quot;&gt;
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in iaculis dolor. Donec condimentum nec elit tempus pretium. In a fermentum elit. Nunc efficitur ante in diam rutrum fermentum. Curabitur lobortis urna vel feugiat condimentum. Nam mollis vestibulum magna, ut aliquet urna volutpat sed. Vivamus placerat ante eget velit aliquet, sit amet tristique ante dictum. Ut viverra vehicula feugiat. Donec eget ex ut ligula euismod tincidunt vel in urna. Maecenas eu metus at mi egestas sagittis. Duis augue orci, ullamcorper quis eros ut, euismod ultricies tortor.'

const letters = computed(() =&gt; text.split(''))

const mouse = ref({ x: 0, y: 0 })
const letterPositions = ref&lt;DOMRect[]&gt;([])

const lettersRef = useTemplateRef&lt;HTMLSpanElement[]&gt;('lettersRef')

const updateMouse = (e: MouseEvent) =&gt; {
  mouse.value = { x: e.clientX, y: e.clientY }
}

onMounted(() =&gt; {
  if (!lettersRef.value) return

  window.addEventListener('mousemove', updateMouse)

  letterPositions.value = lettersRef.value.map((el) =&gt; el.getBoundingClientRect())
})

onUnmounted(() =&gt; window.removeEventListener('mousemove', updateMouse))

const getRotation = (index: number) =&gt; {
  const rect = letterPositions.value[index]

  if (!rect) return 0

  const dx = mouse.value.x - (rect.left + rect.width / 2)
  const dy = mouse.value.y - (rect.top + rect.height / 2)

  return Math.atan2(dy, dx) * (180 / Math.PI)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;span
      ref=&quot;lettersRef&quot;
      class=&quot;inline-block letter&quot;
      v-for=&quot;(letter, index) in letters&quot;
      :style=&quot;{ transform: \`rotate(\${getRotation(index)}deg)\` }&quot;
      :key=&quot;index&quot;
    &gt;
      {{ letter }}
    &lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
`
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

    <pre
      v-html="source"
      class="mt-2 w-full max-w-full p-4 rounded-lg border border-zinc-700 bg-zinc-900 text-gray-100 overflow-x-auto font-mono text-sm shadow-sm"
    />
  </div>
</template>

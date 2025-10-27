<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import CardAnimatedBorder from '@/components/animations/CardAnimatedBorder.vue'

const source = `&lt;script setup lang=&quot;ts&quot;&gt;
const { as = 'article' } = defineProps&lt;{ as?: string }&gt;()
&lt;/script&gt;

&lt;template&gt;
  &lt;component
    :is=&quot;as&quot;
    class=&quot;card overflow-hidden bg-card text-card-foreground flex flex-col rounded-sm border shadow-sm p-2&quot;
  &gt;
    &lt;slot /&gt;
  &lt;/component&gt;
&lt;/template&gt;

&lt;style&gt;
.card {
  --border-angle: 0deg;
  border-radius: var(--card-animated-border-radius, 4px);
  animation: border-angle-rotate var(--card-animated-speed, 4s) infinite linear;
  border: var(--card-animated-border, 1px) solid transparent;
  position: relative;
  background:
    linear-gradient(var(--card-animated-background, white), var(--card-animated-background, white))
      padding-box,
    conic-gradient(
        from var(--border-angle) at 10% 80%,
        transparent,
        var(--card-animated-light-color, orange)
      )
      border-box;
}

@keyframes border-angle-rotate {
  from {
    --border-angle: 0deg;
  }
  to {
    --border-angle: 360deg;
  }
}

@property --border-angle {
  syntax: '&lt;angle&gt;';
  initial-value: 0deg;
  inherits: false;
}
&lt;/style&gt;
`
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

    <pre
      v-html="source"
      class="mt-2 w-full max-w-full p-4 rounded-lg border border-zinc-700 bg-zinc-900 text-gray-100 overflow-x-auto font-mono text-sm shadow-sm"
    />
  </div>
</template>

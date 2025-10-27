<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import { nextTick, onMounted, onUnmounted, ref, shallowRef, useTemplateRef, watch } from 'vue'
import FollowCursorShape from '@/components/animations/FollowCursorShape.vue'

const width = ref(1)
const height = ref(20)
const rows = ref(4)
const cols = ref(10)
const distancePull = ref(400)
</script>

<template>
  <div>
    <NavigationHeader />

    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Follow shape cursor
    </h1>

    <p class="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
      Interactive shape rotation experiment where each shape tilts toward the cursor.
    </p>

    <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">Controls</h2>

    <div class="flex gap-4">
      <fieldset class="flex flex-col">
        <label for="width" class="text-sm text-muted-foreground">Width</label>
        <input
          type="range"
          v-model.number="width"
          min="1"
          max="4"
          step="1"
          name="width"
          class="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
        />
      </fieldset>

      <fieldset class="flex flex-col">
        <label for="height" class="text-sm text-muted-foreground">Height</label>
        <input
          type="range"
          v-model.number="height"
          min="20"
          max="40"
          step="1"
          name="height"
          class="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
        />
      </fieldset>

      <fieldset class="flex flex-col">
        <label for="columns" class="text-sm text-muted-foreground">Columns</label>
        <input
          type="range"
          v-model.number="cols"
          min="10"
          max="30"
          step="1"
          name="columns"
          class="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
        />
      </fieldset>

      <fieldset class="flex flex-col">
        <label for="rows" class="text-sm text-muted-foreground">Rows</label>
        <input
          type="range"
          v-model.number="rows"
          min="4"
          max="30"
          step="1"
          name="rows"
          class="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
        />
      </fieldset>

      <fieldset class="flex flex-col">
        <label for="rows" class="text-sm text-muted-foreground">Distance pull</label>
        <input
          type="range"
          v-model.number="distancePull"
          min="50"
          max="600"
          step="1"
          name="distancePull"
          class="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
        />
      </fieldset>
    </div>

    <div class="border p-2 rounded-lg my-4 min-h-40 grid items-center">
      <FollowCursorShape
        :cols="cols"
        :rows="rows"
        :arrow-height="height"
        :arrow-width="width"
        :distance-pull="distancePull"
      />
    </div>

    <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">Code</h2>
  </div>
</template>

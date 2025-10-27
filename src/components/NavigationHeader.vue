<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'

const { showRefreshButton = false } = defineProps<{
  showRefreshButton?: boolean
}>()

const emits = defineEmits<{ 'click:refresh': [] }>()
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center justify-between gap-2 w-full">
      <SidebarTrigger class="-ml-1" />
      <Button
        v-if="showRefreshButton"
        variant="ghost"
        size="icon"
        class="h-7 w-7"
        @click="emits('click:refresh')"
      >
        <RefreshCw />
        <div class="sr-only">Reload animation</div>
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import HeaderSection from '@/components/pages/HomeView/HeaderSection.vue'
import TextSections from '@/components/pages/HomeView/TextSections.vue'
import CardSections from '@/components/pages/HomeView/CardSections.vue'
</script>

<template>
  <div class="min-h-full">
    <NavigationHeader />
    <HeaderSection />
    <TextSections class="mt-8" />
    <CardSections class="mt-8" />
  </div>
</template>

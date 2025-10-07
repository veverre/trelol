<script setup>
import AppHeader from '@/components/organisms/AppHeader.vue';
</script>
<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
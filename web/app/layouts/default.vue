<script setup>
import AppHeader from '@/components/organisms/AppHeader.vue';
</script>
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
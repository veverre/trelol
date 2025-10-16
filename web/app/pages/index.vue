<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';

const usersStore = useUsersStore();
const isAuthenticated = computed(() => usersStore.isAuthenticated);

</script>
<template>
  <div>
    <h1>Bienvenue sur Trelol !</h1>
    <p>L'application qui fait comme Trello mais en moins bien !</p>
    <NuxtLink v-if="isAuthenticated" to="/boards">
      <Button>Aller à mes tableaux</Button>
    </NuxtLink>
  </div>
</template>
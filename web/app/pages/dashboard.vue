<script setup>
const usersStore = useUsersStore();
const isAuthenticated = computed(() => usersStore.isAuthenticated);
const user = computed(() => usersStore.user);
</script>
<template>
  <div v-if="isAuthenticated">
    <h1>Hello {{ user.name }}</h1>
  </div>
</template>
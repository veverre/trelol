<script setup>
definePageMeta({
  middleware: 'auth'
})
const usersStore = useUsersStore();
const user = computed(() => usersStore.user);

</script>
<template>
  <div>
    <h1>Hello {{ user.name }}</h1>
  </div>
</template>
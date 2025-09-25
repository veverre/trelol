<script setup>
const usersStore = useUsersStore();
usersStore.fetchUser(); 
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

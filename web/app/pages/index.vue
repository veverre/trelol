<script setup>
import SignIn from '~/components/organisms/SignIn.vue';
const usersStore = useUsersStore();
const isAuthenticated = computed(() => usersStore.isAuthenticated);
onMounted(() => {
  if (isAuthenticated.value) {
    window.location.href = '/boards';
  }
});
</script>
<template>
  <div>
    <h1>Bienvenue sur Trelol !</h1>
    <p>L'application qui fait comme Trello mais en moins bien !</p>
    <SignIn></SignIn>
  </div>
</template>
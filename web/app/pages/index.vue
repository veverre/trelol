<script setup>
import SignIn from '~/components/organisms/SignIn.vue';
import Button from '@/components/atoms/Button.vue';

const usersStore = useUsersStore();
const isAuthenticated = computed(() => usersStore.isAuthenticated);

</script>
<template>
  <div>
    <h1>Bienvenue sur Trelol !</h1>
    <p>L'application qui fait comme Trello mais en moins bien !</p>
    <SignIn v-if="!isAuthenticated"></SignIn>
    <NuxtLink v-else to="/boards">
      <Button>Aller à mes tableaux</Button>
    </NuxtLink>
  </div>
</template>
<script setup>
import Signin from '~/components/organisms/Signin.vue';
const router = useRouter();
const usersStore = useUsersStore();
const handleRedirect = async () => {
    await usersStore.fetchUser();
    router.push('/boards');
};
</script>
<template>
  <div>
   <Signin @signin-success="handleRedirect"></Signin>
  </div>
</template>
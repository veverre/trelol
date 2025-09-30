<script setup>
import Signin from '~/components/organisms/Signin.vue';
import Signup from '~/components/organisms/Signup.vue';
const router = useRouter();

const route = useRoute();
const authType = computed(() => route.query.type);

const usersStore = useUsersStore();
const handleRedirect = async () => {
    await usersStore.fetchUser();
    router.push('/boards');
};

</script>
<template>
  <div>
   <Signin v-if="authType === 'signin'" @signin-success="handleRedirect"></Signin>
   <Signup v-else  @signup-success="handleRedirect"></Signup>
  </div>
</template>
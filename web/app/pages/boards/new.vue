<script setup>
import CreateBoard from '@/components/organisms/CreateBoard.vue';
definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const handleRedirect = () => {
    router.push('/boards');
};
</script>
<template>
  <div>
    <CreateBoard @created="handleRedirect"/>
  </div>
</template>
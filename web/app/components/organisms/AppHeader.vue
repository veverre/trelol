<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';

const usersStore = useUsersStore();
const isAuthenticated = computed(() => usersStore.isAuthenticated);
const authStore = useAuthStore();
const handleSignout = async () => {
    await authStore.signout();
    await usersStore.fetchUser();
};
</script>

<template>
    <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
        <NuxtLink to="/">
            <h1 class="text-2xl">Trelol</h1>
        </NuxtLink>
        <div>
            <template v-if="isAuthenticated">
                <Button @click="handleSignout">Se deconnecter</Button>
            </template>
            <template v-else>
                <NuxtLink :to="{ name: 'auth', query: { type: 'signin' } }" class="mr-4"><Button>Se connecter</Button>
                </NuxtLink>
                <NuxtLink :to="{ name: 'auth', query: { type: 'signup' } }"><Button>S'inscrire</Button></NuxtLink>
            </template>
        </div>
    </header>
</template>
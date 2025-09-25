<script setup>
import BaseInput from '@/components/atoms/BaseInput.vue';
import Button from '@/components/atoms/Button.vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
    if (!email.value || !password.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const authStore = useAuthStore();
    const usersStore = useUsersStore();
    authStore.signin({ email: email.value, password: password.value })
        .then(() => {
            usersStore.fetchUser();
        })
        .catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        }); 
};

</script>
<template>
    <div>
        <h2>Me connecter</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <BaseInput v-model="email" type="email" placeholder="E-mail"></BaseInput>
            <BaseInput v-model="password" type="password" placeholder="Mot de passe"></BaseInput>
            <Button type="submit">Valider</Button>
        </form>
    </div>
</template>

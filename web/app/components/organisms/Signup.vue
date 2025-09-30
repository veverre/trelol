<script setup>
import BaseInput from '@/components/atoms/BaseInput.vue';
import Button from '@/components/atoms/Button.vue';

const email = ref('');
const password = ref('');
const name = ref('');

const emits = defineEmits(['signupSuccess']);

const handleSubmit = () => {
    if (!email.value || !password.value || !name.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const authStore = useAuthStore();
    authStore.signup({ email: email.value, password: password.value, name: name.value })
        .then(() => {
            emits('signupSuccess');
        })
        .catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        }); 
};

</script>
<template>
    <div>
        <h1>Bienvenue le nouveau !</h1>
        <h2>Crées toi un compte !</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <BaseInput v-model="email" type="email" placeholder="E-mail"></BaseInput>
            <BaseInput v-model="password" type="password" placeholder="Mot de passe"></BaseInput>
            <BaseInput v-model="name" type="text" placeholder="Nom"></BaseInput>
            <Button type="submit">Valider</Button>
        </form>
    </div>
</template>

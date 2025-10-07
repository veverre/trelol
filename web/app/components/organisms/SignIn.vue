<script setup>
import BaseInput from '@/components/atoms/BaseInput.vue';
import Button from '@/components/atoms/Button.vue';
import Card from '@/components/molecules/Card.vue';

const email = ref('');
const password = ref('');
const emits = defineEmits(['signinSuccess']);

const handleSubmit = () => {
    if (!email.value || !password.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const authStore = useAuthStore();
    authStore.signin({ email: email.value, password: password.value })
        .then(() => {
            emits('signinSuccess');
        })
        .catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        }); 
};

</script>
<template>
    <Card class="flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6">
         <template #heading>
            Hey mais on se connait non ?
        </template>
        <template #subHeading>
            Connecte toi donc !
        </template>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
            <BaseInput v-model="email" type="email" placeholder="E-mail"></BaseInput>
            <BaseInput v-model="password" type="password" placeholder="Mot de passe"></BaseInput>
            <Button type="submit">Valider</Button>
        </form>
    </Card>
</template>

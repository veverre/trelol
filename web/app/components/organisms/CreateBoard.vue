<script setup>
import BaseInput from '@/components/atoms/BaseInput.vue';
import Button from '@/components/atoms/Button.vue';

const emits = defineEmits(['created']);
const title = ref('');
const description = ref('');

const handleSubmit = () => {
    if (!title.value || !description.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const boardsStore = useBoardsStore();
    const usersStore = useUsersStore();
    boardsStore.createBoard({ title: title.value, description: description.value, ownerId: usersStore.user.id })
        .then(() => {
            emits('created');
        })
        .catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        }); 
};

</script>
<template>
    <div>
        <h2>Créer un board de taches</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <BaseInput v-model="title" type="text" placeholder="Titre"></BaseInput>
            <BaseInput v-model="description" type="textarea" placeholder="Description"></BaseInput>
            <Button type="submit">Valider</Button>
        </form>
    </div>
</template>

<script setup>
import BaseInput from '@/components/atoms/BaseInput.vue';
import Button from '@/components/atoms/Button.vue';
import { TaskStatus } from 'api';
import { TasksService } from '~/services/api';

const emits = defineEmits(['created']);
const title = ref('');
const content = ref('');
const props = defineProps({
    boardId: String,
    status: TaskStatus
})

const handleSubmit = () => {
    if (!title.value || !content.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    TasksService.createTask({ title: title.value, content: content.value, status: props.status, boardId: Number(props.boardId) })
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
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <BaseInput v-model="title" type="text" placeholder="Titre"></BaseInput>
            <BaseInput v-model="content" type="textarea" placeholder="Contenu"></BaseInput>
            <Button type="submit">Valider</Button>
        </form>
    </div>
</template>

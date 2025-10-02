<script setup>
import BaseInput from '@/components/atoms/BaseInput.vue';
import Button from '@/components/atoms/Button.vue';
import { TaskStatus } from 'api';
import { TasksService } from '~/services/api';

const emits = defineEmits(['created', 'cancel']);
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
    <div class="w-auto justify-between mb-1 p-4 bg-white rounded shadow">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
            <BaseInput v-model="title" type="text" placeholder="Titre"></BaseInput>
            <BaseInput v-model="content" type="textarea" placeholder="Contenu"></BaseInput>
            <div class="flex justify-end gap-2">
                <Button @click="$emit('cancel')" variant="secondary" type-btn="outlined">Cancel</Button>
                <Button type="submit" variant="success">Valider</Button>
            </div>
        </form>
    </div>
</template>

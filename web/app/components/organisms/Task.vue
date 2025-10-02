<script setup>
import { TaskStatus } from 'api';
import { TasksService } from '~/services/api';
import Button from '@/components/atoms/Button.vue';
import BaseInput from '@/components/atoms/BaseInput.vue';
import Select from '@/components/atoms/Select.vue';

const props = defineProps({ task: Object })
const emits = defineEmits(['edited'])

const statuses = Object.values(TaskStatus);
const editMode = ref(false)

const title = ref(props.task.title)
const content = ref(props.task.content)
const status = ref(props.task.status)

const handleSubmit = () => {
     if (!title.value || !content.value || !status.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    TasksService.editTask({ title: title.value, content: content.value, status: status.value, id: props.task.id })
        .then(() => {
            emits('edited');
        })
        .catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        });
}
</script>

<template>
    <div class="w-100 flex justify-between mb-1 p-4 bg-white rounded shadow">
        <template v-if="!editMode">
            <div class="flex flex-col">
                <h3 class="text-lg">{{ title }}</h3>
                <p>{{ content }}</p>
            </div>
            <Button @click="editMode = true">Edit</Button>
        </template>
        <div v-else>
            <form @submit.prevent="handleSubmit">
                <BaseInput v-model="title"></BaseInput>
                <BaseInput v-model="content"></BaseInput>
                <Select v-model="status" :options="statuses"></Select>
                <div class="flex justify-between">
                    <Button variant="danger">Supprimer</Button>
                    <div>
                        <Button @click="editMode = true" variant="secondary">Cancel</Button>
                        <Button type="submit">Valider</Button>
                    </div>
                </div>
            </form>


        </div>
    </div>
</template>
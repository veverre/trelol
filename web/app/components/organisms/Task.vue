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
const showDeleteConfirm = ref(false)

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
            alert('Edit error:' + error.message);
        });
}

const deleteTask = () => {
    TasksService.deleteTask(props.task.id)
        .then(() => {
            emits('deleted');
        })
        .catch((error) => {
            alert('Delete error : ' + error.message);
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
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
                <BaseInput v-model="title"></BaseInput>
                <BaseInput v-model="content"></BaseInput>
                <Select v-model="status" :options="statuses"></Select>
                <div class="flex justify-between mt-4">
                    <Button @click="showDeleteConfirm = true" variant="danger">Supprimer</Button>
                    <div class="flex justify-end gap-2">
                        <Button @click="editMode = false" variant="secondary">Cancel</Button>
                        <Button type="submit">Valider</Button>
                    </div>
                </div>
            </form>
            <div v-if="showDeleteConfirm"
                class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg shadow-lg w-96 max-w-full p-6 animate-fadeIn">
                    <h4 class="text-xl font-bold mb-4">Voulez vous vraiment supprimer cette task</h4>
                    <div class="flex flex-col p-4 rounded shadow mb-4">
                        <h3 class="text-lg">{{ title }}</h3>
                        <p>{{ content }}</p>
                    </div>
                    <div class="flex justify-end gap-2">
                        <Button @click="showDeleteConfirm = false" variant="secondary">Cancel</Button>
                        <Button @click="deleteTask">Valider</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
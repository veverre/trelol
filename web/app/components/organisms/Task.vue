<script setup lang="ts">
import { TasksService } from '~/services/api';
import { TaskStatus } from '~/types/task-status';
import type { Task } from '~/types/task';
import Button from '@/components/atoms/Button.vue';
import BaseInput from '@/components/atoms/BaseInput.vue';
import Select from '@/components/atoms/Select.vue';
import Card from '@/components/molecules/Card.vue';

const props = defineProps({
    task: {
        type: Object as () => Task,
        required: true
    },
    editTaskId: {
        type: Number,
    }
})
const emits = defineEmits(['deleted', 'edited', 'update:editTaskId'])

const statuses = Object.values(TaskStatus);
const showDeleteConfirm = ref(false)

const title = ref(props.task.title)
const content = ref(props.task.content)
const status = ref(props.task.status)

const isEditing = computed(() => props.editTaskId === props.task.id)
const startEdit = () => {
    emits('update:editTaskId', props.task.id)
}
const cancelEdit = () => {
    emits('update:editTaskId', null)
}

const handleSubmit = () => {
    if (!title.value || !content.value || !status.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    TasksService.editTask({ title: title.value, content: content.value, status: status.value, id: props.task.id })
        .then(() => {
            emits('edited');
            cancelEdit()
        })
        .catch((error) => {
            alert('Edit error:' + error.message);
        });
}

const deleteTask = () => {
    TasksService.deleteTask(props.task.id)
        .then(() => {
            emits('deleted');
            cancelEdit()
        })
        .catch((error) => {
            alert('Delete error : ' + error.message);
        });
}
</script>

<template>
    <template v-if="!isEditing" class="flex justify-between">
        <Card class="flex flex-col">
            <template #heading>{{ title }}</template>
            <template #subHeading>{{ content }}</template>
            <template #actions>
                <Button @click="startEdit">Edit</Button>
            </template>
        </Card>
    </template>
    <template v-else>
        <Card>
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
                <BaseInput v-model="title"></BaseInput>
                <BaseInput v-model="content"></BaseInput>
                <Select v-model="status" :options="statuses"></Select>
                <div class="flex justify-between mt-4">
                    <Button @click="showDeleteConfirm = true" variant="danger">Supprimer</Button>
                    <div class="flex justify-end gap-2">
                        <Button @click="cancelEdit" variant="secondary" type-btn="outlined">Cancel</Button>
                        <Button type="submit" variant="success">Valider</Button>
                    </div>
                </div>
            </form>
            <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card class="animate-fadeIn">
                    <template #heading>Voulez vous vraiment supprimer cette task</template>
                    <template #subHeading>
                        <Card class="flex flex-col p-4 rounded shadow mb-4">
                            <template #heading>{{ title }}</template>
                            <template #subHeading>{{ content }}</template>
                        </Card>
                    </template>
                    <template #actions>
                        <Button @click="showDeleteConfirm = false" variant="secondary">Cancel</Button>
                        <Button @click="deleteTask">Valider</Button>
                    </template>
                </Card>
            </div>
        </Card>
    </template>
</template>
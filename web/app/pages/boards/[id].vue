<script setup>
import { TaskStatus } from 'api';
import Button from '@/components/atoms/Button.vue';
import Task from '@/components/organisms/Task.vue'
import CreateTask from '@/components/organisms/CreateTask.vue'

const statuses = Object.values(TaskStatus);

const route = useRoute();
const boardId = computed(() => route.params.id);

const boardsStore = useBoardsStore();
boardsStore.fetchBoard(boardId.value);
const board = computed(() => boardsStore.board);

const tasksStore = useTasksStore();
tasksStore.fetchTasks(boardId.value)
const tasks = computed(() => tasksStore.tasks)
const editTaskId = ref(null)

const openCreatorStatus = ref(null);

const toogleTaskCreator = (status) => {
    openCreatorStatus.value = openCreatorStatus.value === status ? null : status;
}

const refetch = () => {
    tasksStore.fetchTasks(boardId.value)
    openCreatorStatus.value = null
}
</script>
<template>
    <div>
        <h1>{{ board.title }}</h1>
        <p>{{ board.description }}</p>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="status in statuses" :key="status" class="bg-gray-100 p-4 rounded flex flex-col gap-2">
                <h2 class="text-lg font-bold mb-2">{{ status }}</h2>
                <template v-for="task in tasks" :key="task.id">
                    <Task v-if="task.status === status" v-model:editTaskId="editTaskId" @edited="refetch" @deleted="refetch" :task="task"></Task>
                </template>
                <div class="mt-2">
                    <Button v-if="openCreatorStatus !== status" @click="toogleTaskCreator(status)" type-btn="outlined"
                        class="w-full" icon="pi-plus-circle">
                        Nouvelle tâche
                    </Button>
                    <div v-else>
                        <CreateTask @created="refetch" @cancel="openCreatorStatus = null" :board-id="boardId" :status="status"></CreateTask>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

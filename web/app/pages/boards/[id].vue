<script setup>
import { TaskStatus } from 'api';
import Button from '@/components/atoms/Button.vue';
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

</script>
<template>
    <div>
        <h1>{{ board.title }}</h1>
        <p>{{ board.description }}</p>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="status in statuses" :key="status" class="bg-gray-100 p-4 rounded">
                <h2 class="text-lg font-bold mb-2">{{ status }}</h2>
                <ul>
                    <template v-for="task in tasks" :key="task.id">
                        <li v-if="task.status === status" class="mb-1 p-2 bg-white rounded shadow">
                            <h4>{{ task.title }}</h4>
                            <p>{{ task.content }}</p>
                        </li>
                    </template>
                </ul>
                <Button>Ajouter une tâche</Button>
                <CreateTask @created="tasksStore.fetchTasks(boardId)" :board-id="boardId" :status="status"></CreateTask>
            </div>
        </div>
    </div>
</template>
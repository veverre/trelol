<script setup>
import { TaskStatus } from 'api';
const statuses = Object.values(TaskStatus);
const route = useRoute();

const boardId = computed(() => route.params.id);

const boardsStore = useBoardsStore();
boardsStore.fetchBoard(boardId.value); 
const board = computed(() => boardsStore.board); 
</script>
<template>
    <div>
        <h1>{{ board.title }}</h1>
        <p>{{ board.description }}</p>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="statut in statuses" :key="statut" class="bg-gray-100 p-4 rounded">
                <h2 class="text-lg font-bold mb-2">{{ statut }}</h2>
                <!-- <ul>
                    <li v-for="task in column.tasks" :key="task.id" class="mb-1 p-2 bg-white rounded shadow">
                        {{ task.title }}
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>
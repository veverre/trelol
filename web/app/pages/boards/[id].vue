<script setup>
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
    </div>
</template>
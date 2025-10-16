<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';

definePageMeta({
  middleware: 'auth'
})
const usersStore = useUsersStore();
const user = computed(() => usersStore.user);
const boardsStore = useBoardsStore();
boardsStore.fetchBoards();
const boards = computed(() => boardsStore.boards);

</script>
<template>
  <div>
    <h1>Hello {{ user.name }}</h1>
    <NuxtLink to="/boards/new">
      <Button>Creer un board</Button>
    </NuxtLink>
    <ul>
      <li v-for="board in boards" :key="board.id">
        <NuxtLink :to="`/boards/${board.id}`">
          <h2>{{ board.title }}</h2>
          <p>{{ board.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
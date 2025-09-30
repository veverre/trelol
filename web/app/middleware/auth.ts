import { useUsersStore } from '~/stores/usersStore'

export default defineNuxtRouteMiddleware(() => {
  
const usersStore = useUsersStore();

  if (!usersStore.isAuthenticated) {
    return navigateTo('/')
  }
})
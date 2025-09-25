import { defineStore } from "pinia";
import { UsersService } from "~/services/api";

export const useUsersStore = defineStore("users", {
  state: () => ({
    user: null as null | { id: number; email: string; name: string },
  }),
  actions: {
    async fetchUser() {
      try {
        const res = await UsersService.fetchUser();
        this.user = res;
      } catch (err) {
        this.user = null;
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
  },
});

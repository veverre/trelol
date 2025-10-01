import { defineStore } from "pinia";
import type { User } from "api";
import { UsersService } from "~/services/api";

export const useUsersStore = defineStore("users", {
  state: () => ({
    user: null as null | User,
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

import { defineStore } from "pinia";
import { AuthService, UsersService } from "~/services/api";

export const useAuthStore = defineStore("auth", {
  actions: {
    async signin(data: { email: string; password: string }) {
      await AuthService.signin(data);
    },
  },
});

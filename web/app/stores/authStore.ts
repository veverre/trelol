import { defineStore } from "pinia";
import { AuthService } from "~/services/api";

export const useAuthStore = defineStore("auth", {
  actions: {
    async signin(data: { email: string; password: string }) {
      await AuthService.signin(data);
    },
    async signout() {
      await AuthService.signout();
      const router = useRouter();
      router.push("/");
    }
  },
});

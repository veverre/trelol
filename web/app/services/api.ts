import axios from "axios";
import type { Board } from "shared";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const AuthService = {
  signup(data: { email: string; password: string; name: string }) {
    return api.post("/auth/signup", data);
  },
  signin: (data: { email: string; password: string }) => {
    return api.post("/auth/signin", data);
  },
  signout: () => {
    return api.post("/auth/signout");
  },
};

export const UsersService = {
  fetchUser: () => {
    return api.get("/users/profile").then((res) => res.data);
  },
};

export const BoardsService = {
  fetchBoards: () => {
    return api.get("/boards").then((res) => res.data);
  },
  createBoard: (data: Board) => {
    return api.post("/boards", data).then((res) => res.data);
  },
};

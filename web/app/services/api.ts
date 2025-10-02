import type { TaskStatus } from "api";
import axios from "axios";

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
  createBoard: (data: {
    title: string;
    description?: string;
    ownerId: number;
  }) => {
    return api.post("/boards", data).then((res) => res.data);
  },
  fetchBoard: (id: number) => {
    return api.get(`/boards/${id}`).then((res) => res.data);
  },
};

export const TasksService = {
  fetchTasks: (boardId: number) => {
    return api.get(`tasks/board/${boardId}`).then((res) => res.data);
  },
  createTask: (data: {
    title: string;
    content?: string;
    status?: TaskStatus;
    boardId: number;
  }) => {
    return api.post("/tasks", data).then((res) => res.data);
  },
  editTask: (data: {
    title: string;
    content?: string;
    status?: TaskStatus;
    id: number;
  }) => {
    return api.patch(`/tasks/${data.id}`, data).then((res) => res.data);
  },
  deleteTask: (id: number) => {
    return api.delete(`/tasks/${id}`).then((res) => res.data);
  },
};

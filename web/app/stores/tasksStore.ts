import { TasksService } from "~/services/api";
import type { Task } from "~/types/task";
import type { TaskStatus } from "~/types/task-status";


export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    async fetchTasks(boardId: number) {
      try {
        const res = await TasksService.fetchTasks(boardId);
        this.tasks = res;
      } catch (err) {
        this.tasks = [];
      }
    },
    async createTask(data: {
      title: string;
      content: string;
      status: TaskStatus;
      boardId: number;
    }) {
      await TasksService.createTask(data);
    },
    async editTask(data: {
      title: string;
      content: string;
      status: TaskStatus;
      id: number;
    }) {
      await TasksService.editTask(data);
    },
    async deleteTask(id: number) {
        await TasksService.deleteTask(id);
    }
  },
});

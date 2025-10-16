import type { TaskStatus } from "./task-status";

export type Task = {
    id: number;
    title: string;
    content?: string;
    status: TaskStatus;
    boardId: number;
    createdAt: Date;
    updatedAt: Date;
};
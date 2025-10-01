import { defineStore } from "pinia";
import { BoardsService } from "~/services/api";
import type { Board } from "api";

export const useBoardsStore = defineStore("boards", {
  state: () => ({
    boards: [] as Board[],
    board: {} as Board,
  }),
  actions: {
    async fetchBoards() {
      try {
        const res = await BoardsService.fetchBoards();
        this.boards = res;
      } catch (err) {
        this.boards = [];
      }
    },
    async createBoard(data: { title: string; description: string; ownerId: number; }) {
    type TempBoard = Board & { _optimistic?: boolean };
      try {
        // Optimistic UI
        const tempBoard: TempBoard = { ...data, id: Date.now(), _optimistic: true };
        this.boards.push(tempBoard);

        // API call
        const res = await BoardsService.createBoard(data);

        // Replace optimistic by real data
        this.boards = this.boards.filter((b: Board) => !b._optimistic);
        this.boards.push(res);

        // (Optionnel) petit refetch pour tout resynchroniser
        await this.fetchBoards();
      } catch (err) {
        console.error("Failed to create board", err);
        // rollback si erreur
        this.boards = this.boards.filter((b: Board) => !b._optimistic);
      }
    },
    async fetchBoard(id: number) {
      try {
        this.board = await BoardsService.fetchBoard(id);
      } catch (err) {
        console.error("Failed to fetch board", err);
      }
    }
  },
  getters: {
    getBoards: (state) => state.boards,
    getBoard: (state) => state.board,
  },
});

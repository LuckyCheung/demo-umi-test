import { createSlice } from '@reduxjs/toolkit';
import type { ToDoItemType } from '@/pages/todo/data';

export const STORAGE_KEY = 'vue-todomvc';

export type TodoState = {
  todos: ToDoItemType[];
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  },
  reducers: {
    updateTodos(state, { payload }) {
      state.todos = payload.todos;
    },
  },
});

export const { updateTodos } = todoSlice.actions;

export const selectTodos = (state: any) => state.todo.todos;

export default todoSlice.reducer;

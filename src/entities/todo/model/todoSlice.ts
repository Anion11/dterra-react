import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from './ITodo';

interface ITodoSlice {
  todos: ITodo[];
  error?: string;
}

const initialState: ITodoSlice = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  }
});

export const fetchTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data: ITodo[] = await response.json();
  return data;
});

export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;

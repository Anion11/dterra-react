import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodoFiltersState } from './types';

import { ITodo } from '@/entities/todo/model/ITodo';

const initialState: ITodoFiltersState = {
  filters: {}
};

const todoFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    initFilters: (state, action: PayloadAction<ITodo[]>) => {
      const todos = action.payload;

      const filterKeys: (keyof ITodo)[] = ['completed', 'userId'];

      filterKeys.forEach(key => {
        const uniqueValues = Array.from(new Set(todos.map(todo => todo[key])));

        state.filters[key] = {
          options: uniqueValues,
          selected: []
        };
      });
    },
    toggleFilter: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
      const { key, value } = action.payload;
      const filter = state.filters[key];

      if (filter.selected.includes(value)) {
        filter.selected = filter.selected.filter(v => v !== value);
      } else {
        filter.selected.push(value);
      }
    }
  }
});

export const { initFilters, toggleFilter } = todoFilterSlice.actions;
export default todoFilterSlice.reducer;

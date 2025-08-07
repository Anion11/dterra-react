import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todoReducer from '@/entities/todo/model/todoSlice';
import todoFilterReducer from '@/features/todo-filters/model/todoFilterSlice';

const reducers = combineReducers({
  todos: todoReducer,
  filters: todoFilterReducer
});

const store = configureStore({
  reducer: reducers
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

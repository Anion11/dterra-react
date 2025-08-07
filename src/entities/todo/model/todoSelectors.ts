import { ITodo } from './ITodo';

import { RootState } from '@/app/store/store';

export const allTodosSelector = (state: RootState): ITodo[] => state.todos.todos;

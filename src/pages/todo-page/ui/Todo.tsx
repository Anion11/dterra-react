import { FC, useEffect, useState } from 'react';

import { ITodo } from '@/entities/todo/model/ITodo';
import { allTodosSelector } from '@/entities/todo/model/todoSelectors';
import { fetchTodos } from '@/entities/todo/model/todoSlice';
import { TodoFilters } from '@/features';
import { initFilters, toggleFilter } from '@/features/todo-filters/model/todoFilterSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import Inner from '@/shared/ui/inner/ui/Inner';
import { TodoList } from '@/widgets';

const TodoPage: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(allTodosSelector);
  const { filters } = useAppSelector(state => state.filters);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    if (todos.length) return;
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (!todos.length || Object.keys(filters).length) return;
    dispatch(initFilters(todos));
  }, [todos]);

  useEffect(() => {
    if (todos.length && Object.keys(filters).length) {
      const filtered = todos.filter(todo => {
        return Object.entries(filters).every(([key, filter]) => {
          if (filter.selected.length === 0) return true;
          return filter.selected.includes(todo[key as keyof ITodo]);
        });
      });
      setFilteredTodos(filtered);
    }
  }, [todos, filters]);

  const handleFilterChange = (key: string, value: unknown) => {
    dispatch(toggleFilter({ key, value }));
  };

  return (
    <Inner>
      <TodoFilters
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <TodoList todos={filteredTodos} />
    </Inner>
  );
};

export default TodoPage;

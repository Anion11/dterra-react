import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { RootState } from '@/app/store/store';
import { ITodo } from '@/entities/todo/model/ITodo';
import { allTodosSelector } from '@/entities/todo/model/todoSelectors';
import { fetchTodos } from '@/entities/todo/model/todoSlice';
import { TodoFilters } from '@/features';
import { initFilters, toggleFilter } from '@/features/todo-filters/model/todoFilterSlice';
import { ITodoFiltersState } from '@/features/todo-filters/model/types';
import Inner from '@/shared/ui/inner/ui/Inner';
import { TodoList } from '@/widgets';

interface StateProps extends ITodoFiltersState {
  todos: ITodo[];
}

interface DispatchProps {
  fetchTodos: () => void;
  initFilters: (todos: ITodo[]) => void;
  toggleFilter: (payload: { key: string; value: unknown }) => void;
}

type Props = StateProps & DispatchProps;

const TodosPageConnect: FC<Props> = ({ todos, filters, fetchTodos, initFilters, toggleFilter }) => {
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    if (todos.length) return;
    fetchTodos();
  }, [fetchTodos, todos.length]);

  useEffect(() => {
    if (!todos.length || Object.keys(filters).length) return;
    initFilters(todos);
  }, [todos, filters, initFilters]);

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
    toggleFilter({ key, value });
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

const mapStateToProps = (state: RootState): StateProps => ({
  todos: allTodosSelector(state),
  filters: state.filters.filters
});

const mapDispatchToProps: DispatchProps = {
  fetchTodos,
  initFilters,
  toggleFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosPageConnect);

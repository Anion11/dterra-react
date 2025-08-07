import { FC } from 'react';

import styles from './TodoList.module.scss';

import { TodoItem } from '@/entities';
import { ITodo } from '@/entities/todo/model/ITodo';

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className={styles.list}>
      {todos?.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

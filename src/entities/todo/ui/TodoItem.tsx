import { FC } from 'react';
import clsx from 'clsx';

import { ITodo } from '../model/ITodo';

import styles from './TodoItem.module.scss';

import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';

const TodoItem: FC<ITodo> = props => {
  const { userId, title, completed } = props;

  return (
    <div className={clsx(styles.container, completed && styles.container_completed)}>
      <Title>{title}</Title>
      <Text>User ID: {userId}</Text>
      <Text>{completed ? 'Выполнено' : 'Не выполнено'}</Text>
    </div>
  );
};

export default TodoItem;

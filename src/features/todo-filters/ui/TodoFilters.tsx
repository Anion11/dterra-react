import { FC } from 'react';
import clsx from 'clsx';

import { ITodoFilters } from '../model/ITodoFilters';

import styles from './TodoFilters.module.scss';

import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';

const TodoFilters: FC<ITodoFilters> = ({ filters, onFilterChange }) => {
  return (
    <ul className={styles.filters}>
      {Object.entries(filters).map(([key, filter]) => (
        <li
          key={key}
          className={styles.filters__group}
        >
          <Title variant="24">{key}</Title>
          <div className={styles.filters__options}>
            {filter.options.map(option => (
              <label
                key={option as string}
                className={clsx(
                  styles.filters__option,
                  filter.selected.includes(option) && styles.filters__option_active
                )}
              >
                <input
                  type="checkbox"
                  checked={filter.selected.includes(option)}
                  onChange={() => onFilterChange(key, option)}
                />
                <Text>
                  {key === 'completed'
                    ? option
                      ? 'Выполненные'
                      : 'Не выполненные'
                    : String(option)}
                </Text>
              </label>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoFilters;

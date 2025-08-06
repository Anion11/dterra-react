// features/categories/ui/CategoryNavigation.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { ICategoryList } from '../model/ICategoryList';

import styles from './CategoryList.module.scss';

import Text from '@/shared/ui/text/ui/Text';

const CategoryList: FC<ICategoryList> = ({ categories, activeCategory }) => {
  return (
    <ul className={styles.list}>
      {categories.map(category => (
        <li
          key={category.id}
          className={clsx(
            styles.list__category,
            activeCategory === category.name && styles.list__category_active
          )}
        >
          <Link to={`/products/${category.name}`}>
            <Text variant="16">{category.title}</Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;

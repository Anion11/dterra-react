import { FC } from 'react';

import style from './ProductList.module.scss';

import { ProductCard } from '@/entities';
import { useGetProducts } from '@/entities/product-card/model/useGetProducts';
import { ICategory } from '@/features/category-list/model/ICategoryList';
import CategoryList from '@/features/category-list/ui/CategoryList';
import Text from '@/shared/ui/text/ui/Text';

const ProductList: FC = () => {
  const { products, productsIds } = useGetProducts();

  const categories: ICategory[] = [
    { id: 1, name: 'astro', title: 'Category 1 title' },
    { id: 2, name: 'picture', title: 'Category 2 title' },
    { id: 3, name: 'auto', title: 'Category 3 title' },
    { id: 4, name: 'games', title: 'Category 4 title' },
    { id: 5, name: 'category5', title: 'Category 5 title' },
    { id: 6, name: 'category6', title: 'Category 6 title' }
  ];

  return (
    <>
      <Text className={style.container}>{productsIds}</Text>
      <div style={{ marginBottom: '20px' }}>
        <CategoryList
          categories={categories}
          activeCategory={'astro'}
        />
      </div>

      <div className={style.list}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            userId={product.userId}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;

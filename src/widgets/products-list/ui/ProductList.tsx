import { FC } from 'react';

import style from './ProductList.module.scss';

import { ProductCard } from '@/entities';
import { useGetProducts } from '@/entities/product-card/model/useGetProducts';
import Text from '@/shared/ui/text/ui/Text';

const ProductList: FC = () => {
  const { products, productsIds } = useGetProducts();

  return (
    <>
      <Text className={style.container}>{productsIds}</Text>
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

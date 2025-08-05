import { FC } from 'react';

import Inner from '@/shared/ui/inner/ui/Inner';
import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';
import { ProductList } from '@/widgets';

const Products: FC = () => {
  return (
    <Inner>
      {/* По хорошему добавить section и section-head или типа того */}
      <Title
        tag="h1"
        variant="36"
        style={{ marginBottom: '10px' }}
      >
        Страница продуктов
      </Title>
      <Text
        variant="18"
        style={{ marginBottom: '40px' }}
      >
        Покупайте наши продукты с выгодой. Реально выгодно :)
      </Text>
      <ProductList />
    </Inner>
  );
};

export default Products;

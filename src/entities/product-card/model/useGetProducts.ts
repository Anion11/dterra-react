import { useEffect, useState } from 'react';

import { IProductCard } from './IProductCard';

import $api from '@/shared/api/api';
import MockImage1 from '@/shared/assets/images/product-image.jpg';
import MockImage2 from '@/shared/assets/images/product-image2.jpg';

export const useGetProducts = () => {
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [productsIds, setProductsIds] = useState<string>('');

  const getProducts = async () => {
    try {
      const response = await $api.get<Pick<IProductCard, 'id' | 'userId' | 'title'>[]>('/albums');

      const data = response.data.map(item => ({
        ...item,
        price: item.id * 1000 /* Мок ибо негде брать */,
        images: [MockImage1, MockImage2] /* Мок ибо негде брать */
      }));

      const filterDataEven = data.filter(
        (item, index) => index % 2 === 0
      ); /* берем каждый второй */

      const filterData = filterDataEven.map((item, index) =>
        index % 3 === 0 ? { ...item, title: undefined } : item
      ); /* у каждого 3 из оставшихся у нас title = undefined */

      const allIds = filterData.reduce((acc, item, index) => {
        return acc + (index !== 0 ? ', ' : '') + item.id;
      }, 'Все id товаров: '); /* reduce для id */

      setProductsIds(allIds);

      setProducts(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  const getProductsFetch = async () => {
    try {
      const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const fetchData: Pick<IProductCard, 'id' | 'userId' | 'title'>[] = await fetchResponse.json();

      const data = fetchData.map(item => ({
        ...item,
        price: item.id * 1000 /* Мок ибо негде брать */,
        images: [MockImage1, MockImage2] /* Мок ибо негде брать */
      }));

      const filterDataEven = data.filter(
        (item, index) => index % 2 === 0
      ); /* берем каждый второй */

      const filterData = filterDataEven.map((item, index) =>
        index % 3 === 0 ? { ...item, title: undefined } : item
      ); /* у каждого 3 из оставшихся у нас title = undefined */

      const allIds = filterData.reduce((acc, item, index) => {
        return acc + (index !== 0 ? ', ' : '') + item.id;
      }, 'Все id товаров: '); /* reduce для id */

      setProductsIds(allIds);

      setProducts(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getProducts();

    getProductsFetch();
  }, []);

  return { products, productsIds, getProducts, getProductsFetch };
};

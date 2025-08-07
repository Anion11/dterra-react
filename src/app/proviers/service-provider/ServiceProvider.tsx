import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import store from '@/app/store/store';

interface IProps {
  children?: React.ReactNode;
}
const ServiceProvider: FC<IProps> = ({ children }) => {
  useEffect(() => {
    console.log('ServiceProvider');
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default ServiceProvider;

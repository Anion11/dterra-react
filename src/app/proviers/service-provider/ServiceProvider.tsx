import React, { FC, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface IProps {
  children?: React.ReactNode;
}
const ServiceProvider: FC<IProps> = ({ children }) => {
  useEffect(() => {
    console.log('ServiceProvider');
  }, []);

  return <>{children}</>;
};

export default ServiceProvider;

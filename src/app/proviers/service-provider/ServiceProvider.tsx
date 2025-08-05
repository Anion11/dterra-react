import React, { FC, useEffect } from 'react';

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

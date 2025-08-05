import React, { FC } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import ServiceProvider from './service-provider/ServiceProvider';

interface IProps {
  children?: React.ReactNode;
}

const AppProvider: FC<IProps> = ({ children }) => {
  return (
    <Router>
      <ServiceProvider>
        <Routes>{children}</Routes>
      </ServiceProvider>
    </Router>
  );
};

export default AppProvider;

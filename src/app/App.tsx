import { ReactElement } from 'react';

import '@/app/styles/index.scss';

import AppProvider from '@/app/proviers/AppProvider';
import { routes } from '@/app/routes';
import { renderRoutes } from '@/app/routes/renderRoutes';

const App = (): ReactElement => {
  return <AppProvider>{renderRoutes(routes)}</AppProvider>;
};

export default App;

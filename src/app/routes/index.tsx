import { RouteObject } from 'react-router-dom';

import { UiPageLazy } from '@/pages';
import Layout from '@/shared/ui/layout/ui/Layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '*', element: <div>Not Found</div> },
      { path: '/', element: <div>Main</div> },
      {
        path: '/ui',
        element: <UiPageLazy />
      }
    ]
  }
];

export { routes };

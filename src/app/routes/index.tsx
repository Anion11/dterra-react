import { RouteObject } from 'react-router-dom';

import { ProductsPageLazy, UiPageLazy } from '@/pages';
import Layout from '@/shared/ui/layout/ui/Layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '*', element: <div>Not Found</div> },
      { path: '/products', element: <ProductsPageLazy /> },
      {
        path: '/ui',
        element: <UiPageLazy />
      }
    ]
  }
];

export { routes };

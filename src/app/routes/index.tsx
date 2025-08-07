import { RouteObject } from 'react-router-dom';

import { ProductsPageLazy, TodoConnectPageLazy, TodoPageLazy, UiPageLazy } from '@/pages';
import Layout from '@/widgets/layout/ui/Layout';

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
      },
      {
        path: '/todos',
        element: <TodoPageLazy />
      },
      {
        path: '/todos-connect',
        element: <TodoConnectPageLazy />
      }
    ]
  }
];

export { routes };

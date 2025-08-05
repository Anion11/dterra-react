import { Route, RouteObject } from 'react-router-dom';

export const renderRoutes = (routes: RouteObject[]) => {
  return routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

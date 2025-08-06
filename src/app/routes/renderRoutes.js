import { jsx as _jsx } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
export const renderRoutes = (routes) => {
    return routes.map(route => (_jsx(Route, { path: route.path, element: route.element, children: route.children && renderRoutes(route.children) }, route.path)));
};

import { jsx as _jsx } from "react/jsx-runtime";
import { ProductsPageLazy, UiPageLazy } from '@/pages';
import Layout from '@/shared/ui/layout/ui/Layout';
const routes = [
    {
        path: '/',
        element: _jsx(Layout, {}),
        children: [
            { path: '*', element: _jsx("div", { children: "Not Found" }) },
            { path: '/products', element: _jsx(ProductsPageLazy, {}) },
            {
                path: '/ui',
                element: _jsx(UiPageLazy, {})
            }
        ]
    }
];
export { routes };

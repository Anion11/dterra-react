import { jsx as _jsx } from "react/jsx-runtime";
import '@/app/styles/index.scss';
import AppProvider from '@/app/proviers/AppProvider';
import { routes } from '@/app/routes';
import { renderRoutes } from '@/app/routes/renderRoutes';
const App = () => {
    return _jsx(AppProvider, { children: renderRoutes(routes) });
};
export default App;

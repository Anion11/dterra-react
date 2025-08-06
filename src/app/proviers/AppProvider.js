import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ServiceProvider from './service-provider/ServiceProvider';
const AppProvider = ({ children }) => {
    return (_jsx(Router, { children: _jsx(ServiceProvider, { children: _jsx(Routes, { children: children }) }) }));
};
export default AppProvider;

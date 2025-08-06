import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
const Layout = () => {
    return (_jsxs("div", { className: style.wrapper, children: [_jsx("header", { style: {
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '1rem 2rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }, children: "header" }), _jsx("main", { style: { paddingTop: '20px', paddingBottom: '20px' }, children: _jsx(Outlet, {}) }), _jsx("footer", { style: {
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '1.5rem 2rem',
                    textAlign: 'center',
                    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)'
                }, children: "footer" })] }));
};
export default Layout;

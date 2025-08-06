import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
const ServiceProvider = ({ children }) => {
    useEffect(() => {
        console.log('ServiceProvider');
    }, []);
    return _jsx(_Fragment, { children: children });
};
export default ServiceProvider;

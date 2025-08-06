import { jsx as _jsx } from "react/jsx-runtime";
import { Children, useRef } from 'react';
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import style from './HoverSwiper.module.scss';
const DynamicHoverSwiper = ({ children }) => {
    const swiperContainerRef = useRef(null);
    const swiperRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!swiperContainerRef.current || !swiperRef.current)
            return;
        const container = swiperContainerRef.current;
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const containerWidth = rect.width;
        const progress = mouseX / containerWidth;
        const slidesCount = Children.toArray(children).length;
        if (slidesCount === 0)
            return;
        const targetIndex = Math.min(Math.floor(progress * slidesCount), slidesCount - 1);
        swiperRef.current.swiper.slideTo(targetIndex);
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(0);
        }
    };
    return (_jsx("div", { ref: swiperContainerRef, onMouseLeave: handleMouseLeave, onMouseMove: handleMouseMove, children: _jsx(Swiper, { ref: swiperRef, slidesPerView: 1, modules: [EffectFade, Pagination], effect: "fade", wrapperClass: style.swiper__wrapper, className: style.swiper, pagination: {}, children: children }) }));
};
export default DynamicHoverSwiper;

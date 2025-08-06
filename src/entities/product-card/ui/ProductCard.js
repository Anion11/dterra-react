import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import style from './ProductCard.module.scss';
import Button from '@/shared/ui/button/ui/Button';
import HoverSwiper from '@/shared/ui/swiper-hover/ui/HoverSwiper';
import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';
const ProductCard = props => {
    const { id, userId, title, price, images } = props;
    const navigate = useNavigate();
    const handleClickCard = () => {
        navigate(`/product/${id}`);
    };
    const handleClickBuy = (e) => {
        console.log(`В корзину добавлен товар: ${id} от пользователя: ${userId}`);
        e.stopPropagation();
    };
    return (_jsxs("article", { className: style.card, onClick: handleClickCard, children: [_jsx(HoverSwiper, { children: images.map(image => (_jsx(SwiperSlide, { children: _jsx("div", { className: style.card__image, children: _jsx("img", { src: image, alt: "" }) }) }, image))) }), _jsxs("div", { className: style.card__content, children: [_jsxs(Title, { variant: "30", className: style.card__price, children: [price, " \u20BD"] }), title ? (_jsx(Text, { variant: "18", className: style.card__title, children: title })) : (_jsx(Text, { variant: "18", className: style.card__title, children: "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435!!!" })), _jsxs(Text, { variant: "13", className: style.card__title, children: ["\u041F\u0440\u043E\u0434\u0430\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ", userId, " \u043F\u043E \u0446\u0435\u043D\u0435 ", price] }), _jsx(Button, { text: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443", onClick: handleClickBuy, className: style.card__button })] })] }));
};
export default ProductCard;

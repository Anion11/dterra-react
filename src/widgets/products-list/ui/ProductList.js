import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import style from './ProductList.module.scss';
import { ProductCard } from '@/entities';
import { useGetProducts } from '@/entities/product-card/model/useGetProducts';
import Text from '@/shared/ui/text/ui/Text';
const ProductList = () => {
    const { products, productsIds } = useGetProducts();
    return (_jsxs(_Fragment, { children: [_jsx(Text, { className: style.container, children: productsIds }), _jsx("div", { className: style.list, children: products.map(product => (_jsx(ProductCard, { id: product.id, userId: product.userId, title: product.title, price: product.price, images: product.images }, product.id))) })] }));
};
export default ProductList;

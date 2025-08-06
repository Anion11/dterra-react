import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Inner from '@/shared/ui/inner/ui/Inner';
import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';
import { ProductList } from '@/widgets';
const Products = () => {
    return (_jsxs(Inner, { children: [_jsx(Title, { tag: "h1", variant: "36", style: { marginBottom: '10px' }, children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432" }), _jsx(Text, { variant: "18", style: { marginBottom: '40px' }, children: "\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u043D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u0432\u044B\u0433\u043E\u0434\u043E\u0439. \u0420\u0435\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E :)" }), _jsx(ProductList, {})] }));
};
export default Products;

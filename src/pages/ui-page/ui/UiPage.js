import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Inner from '@/shared/ui/inner/ui/Inner';
import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';
import { ProductList } from '@/widgets';
const UiPage = () => {
    return (_jsxs(Inner, { children: [_jsx(Title, { tag: "h1", variant: "36", style: { marginBottom: '20px' }, children: "UI Page" }), _jsxs("div", { style: {
                    border: '1px solid #000',
                    marginBottom: '20px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }, children: [_jsx(Title, { tag: "h2", variant: "30", style: { marginBottom: '10px' }, children: "Typography:" }), _jsxs("div", { style: { display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }, children: [_jsx(Title, { tag: "h1", variant: "36", children: "Title h1" }), _jsx(Title, { tag: "h2", variant: "30", children: "Title h2" }), _jsx(Title, { tag: "h3", variant: "28", children: "Title h3" }), _jsx(Title, { tag: "h4", variant: "24", children: "Title h4" }), _jsx(Title, { tag: "h5", variant: "20", children: "Title h5" })] }), _jsxs("div", { style: { display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }, children: [_jsx(Text, { variant: "18", children: "Text" }), _jsx(Text, { variant: "16", children: "Text" }), _jsx(Text, { variant: "14", children: "Text" }), _jsx(Text, { variant: "13", children: "Text" })] })] }), _jsx(ProductList, {})] }));
};
export default UiPage;

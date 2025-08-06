import { jsx as _jsx } from "react/jsx-runtime";
import style from './Inner.module.scss';
const Inner = ({ children }) => {
    return _jsx("div", { className: style.inner, children: children });
};
export default Inner;

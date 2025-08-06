import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Button.module.scss';
import Text from '@/shared/ui/text/ui/Text';
const Button = props => {
    const { text, onClick, className, variant } = props;
    return (_jsx("button", { className: clsx(styles.button, styles[`button_variant-${variant}`], className && className), onClick: onClick, children: text && (_jsx(Text, { variant: "18", className: styles.button__text, children: text })) }));
};
export default Button;

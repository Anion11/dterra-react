import React, { createElement, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { IText } from '../model/IText';

import styles from './Text.module.scss';

const Text: React.FC<PropsWithChildren<IText>> = ({
  children,
  variant = '18',
  tag = 'p',
  className,
  bold = 400,
  ...props
}) => {
  const classNames = clsx(
    'text',
    styles[`text_variant-${variant}`],
    styles[`text_weight-${bold}`],
    className
  );
  return createElement(tag, { ...props, className: classNames }, children);
};

export default Text;

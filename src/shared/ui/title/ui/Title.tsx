import React, { createElement, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { ITitle } from '../model/ITitle';

import styles from './Title.module.scss';

const Title: React.FC<PropsWithChildren<ITitle>> = ({
  children,
  variant = '36',
  tag = 'h1',
  className,
  bold = 700,
  ...props
}) => {
  const classNames = clsx(
    'title',
    styles[`title_variant-${variant}`],
    styles[`title_weight-${bold}`],
    className
  );
  return createElement(tag, { ...props, className: classNames }, children);
};

export default Title;

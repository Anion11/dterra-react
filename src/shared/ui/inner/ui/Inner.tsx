import { FC } from 'react';

import { IInner } from '../module/IInner';

import style from './Inner.module.scss';

const Inner: FC<IInner> = ({ children }) => {
  return <div className={style.inner}>{children}</div>;
};

export default Inner;

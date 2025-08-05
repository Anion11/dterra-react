import { HTMLAttributes } from 'react';

export type TitleTagsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type TitleVariantsType = '36' | '30' | '28' | '24' | '20';

export interface ITitle extends HTMLAttributes<HTMLElement> {
  variant?: TitleVariantsType;
  tag?: TitleTagsType;
  bold?: number;
}

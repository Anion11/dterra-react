import { HTMLAttributes } from 'react';

export type TextTagsType = 'p' | 'span' | 'b';

export type TextVariantsType = '18' | '16' | '14' | '13';

export interface IText extends HTMLAttributes<HTMLElement> {
  variant?: TextVariantsType;
  tag?: TextTagsType;
  bold?: number;
}

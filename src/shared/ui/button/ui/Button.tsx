import { FC } from 'react';
import clsx from 'clsx';

import { IButton } from '../model/IButton';

import styles from './Button.module.scss';

import Text from '@/shared/ui/text/ui/Text';

const Button: FC<IButton> = props => {
  const { text, onClick, className, variant } = props;

  return (
    <button
      className={clsx(styles.button, styles[`button_variant-${variant}`], className && className)}
      onClick={onClick}
    >
      {text && (
        <Text
          variant="18"
          className={styles.button__text}
        >
          {text}
        </Text>
      )}
    </button>
  );
};

export default Button;

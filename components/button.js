import React from 'react';
import cx from 'classnames';

import styles from './button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  is: Component = 'button',
  fullWidth,
  className,
}) {
  return (
    <Component
      className={cx(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        {
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
    >
      {children}
    </Component>
  );
}

import React, { forwardRef, ReactNode } from 'react';
import { ColorType, IconType } from '../../types';
import Icon from '../icon';
import { MenuItemActive, MenuItemSize, MenuItemTheme, Sizes } from './theme';

export interface Props {
  children: ReactNode;
  icon?: IconType;
  iconColor?: ColorType;
  active?: boolean;
  size?: Sizes;
  onClick?: () => void;
}

const MenuItem = forwardRef<HTMLAnchorElement, Props>(
  (
    { icon, children, iconColor, active = false, size = 'base', onClick },
    ref,
  ) => {
    const themeActive = active ? MenuItemActive : '';
    const themeSize = MenuItemSize[size];
    const theme = `${MenuItemTheme} ${themeSize} ${themeActive}`;

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a ref={ref} className={theme} onClick={onClick}>
        {icon && (
          <span className="mr-3">
            <Icon icon={icon} color={iconColor} />
          </span>
        )}
        <>{children}</>
      </a>
    );
  },
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;

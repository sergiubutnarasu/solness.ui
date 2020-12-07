import React, { FunctionComponent } from 'react';
import { ColorType, IconType } from '../../types';
import Icon from '../icon';
import { MenuItemActive, MenuItemTheme, Sizes, MenuItemSize } from './theme';

export interface Props {
  children: string;
  icon?: IconType;
  iconColor?: ColorType;
  active?: boolean;
  size?: Sizes;
  onClick?: () => void;
}

const MenuItem: FunctionComponent<Props> = ({
  icon,
  children,
  iconColor,
  active = false,
  size = 'base',
  onClick,
}) => {
  const themeActive = active ? MenuItemActive : '';
  const themeSize = MenuItemSize[size];
  const theme = `${MenuItemTheme} ${themeSize} ${themeActive}`;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={theme} onClick={onClick}>
      {icon && (
        <span className="mr-3">
          <Icon icon={icon} color={iconColor} />
        </span>
      )}
      <>{children}</>
    </a>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;

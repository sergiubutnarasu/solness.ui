import React, { FunctionComponent } from 'react';
import { ColorType, IconType } from '../../types';
import Icon from '../icon';
import { MenuItemActive, MenuItemTheme } from './theme';

export interface Props {
  children: string;
  icon?: IconType;
  iconColor?: ColorType;
  active?: boolean;
  onClick?: () => void;
}

const MenuItem: FunctionComponent<Props> = ({
  icon,
  children,
  iconColor,
  active = false,
  onClick,
}) => {
  const themeActive = active ? MenuItemActive : '';
  const theme = `${MenuItemTheme} ${themeActive}`;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={theme} onClick={onClick}>
      {icon && <Icon icon={icon} color={iconColor} />}
      <span className="ml-3">{children}</span>
    </a>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;

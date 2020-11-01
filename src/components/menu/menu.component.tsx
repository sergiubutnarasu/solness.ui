import React, { FunctionComponent, ReactNode } from 'react';
import { MenuTheme } from './theme';

export interface Props {
  children: ReactNode;
}

const Menu: FunctionComponent<Props> = ({ children }) => {
  return <nav className={MenuTheme}>{children}</nav>;
};

Menu.displayName = 'Menu';

export default Menu;

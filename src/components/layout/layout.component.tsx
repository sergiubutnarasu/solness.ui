import React, { FunctionComponent, ReactNode } from 'react';
import * as Theme from './theme';
import '../../global/styles/styles.css';

export interface Props {
  children: ReactNode;
  menu?: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children, menu }) => {
  return (
    <div className="flex bg-gray-100">
      {menu && <div>{menu}</div>}
      <div className={Theme.LayoutContentTheme}>{children}</div>
    </div>
  );
};

Layout.displayName = 'Layout';

export default Layout;

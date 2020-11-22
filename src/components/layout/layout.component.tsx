import React, { FunctionComponent, ReactNode } from 'react';
import * as Theme from './theme';
import '../../global/styles/styles.css';

export interface Props {
  children: ReactNode;
  menu?: ReactNode;
  sidebar?: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children, menu, sidebar }) => {
  return (
    <div className="flex bg-gray-100">
      {menu && <div>{menu}</div>}
      <div className={Theme.LayoutContentTheme}>{children}</div>
      {sidebar && <div>{sidebar}</div>}
    </div>
  );
};

Layout.displayName = 'Layout';

export default Layout;

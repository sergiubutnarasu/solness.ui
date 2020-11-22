import React, { FunctionComponent, ReactNode } from 'react';
import '../../global/styles/tailwind.output.css';
import '../../global/styles/styles.css';

export interface Props {
  children: ReactNode;
}

const StorybookLayout: FunctionComponent<Props> = ({ children }) => (
  <>{children}</>
);

StorybookLayout.displayName = 'StorybookLayout';

export default StorybookLayout;

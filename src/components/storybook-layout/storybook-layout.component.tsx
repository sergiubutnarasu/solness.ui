import React, { FunctionComponent, ReactNode } from 'react';
import '../../global/styles/tailwind.output.css';

export interface Props {
  children: ReactNode;
}

const StorybookLayout: FunctionComponent<Props> = ({ children }) => <>{children}</>;

StorybookLayout.displayName = 'StorybookLayout';

export default StorybookLayout;

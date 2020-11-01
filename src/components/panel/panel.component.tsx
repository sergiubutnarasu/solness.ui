import React, { FunctionComponent, ReactNode } from 'react';
import Typography from '../typography';

export interface Props {
  title: string;
  children: ReactNode;
}

const Panel: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="rounded-lg flex-grow flex-basis-0 shadow-lg bg-white p-6 mb-8">
      <Typography size="xsmall" weight="semibold">
        {title}
      </Typography>
      <div className="mt-3">{children}</div>
    </div>
  );
};

Panel.displayName = 'Panel';

export default Panel;

import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType } from '../../types';
import Typography from '../typography';
import * as Theme from './theme';
export interface Props {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  color?: ColorType;
  titleColor?: ColorType;
}

const Panel: FunctionComponent<Props> = ({
  title,
  children,
  actions,
  color = 'white',
  titleColor = 'black',
}) => {
  const theme = `${Theme.PanelTheme} ${Theme.PanelColorTheme[color]}`;

  return (
    <div className={theme}>
      <div className="flex items-center justify-between">
        <Typography size="xsmall" weight="semibold" color={titleColor}>
          {title}
        </Typography>

        {actions && <div className="ml-4">{actions}</div>}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
};

Panel.displayName = 'Panel';

export default Panel;

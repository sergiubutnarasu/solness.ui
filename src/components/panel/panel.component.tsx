import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType, SizeType } from '../../types';
import Typography from '../typography';
import * as Theme from './theme';
export interface Props {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
  color?: ColorType;
  titleColor?: ColorType;
  shadow?: SizeType;
}

const Panel: FunctionComponent<Props> = ({
  title,
  children,
  actions,
  color = 'white',
  titleColor = 'black',
  shadow = 'small',
}) => {
  const theme = `${Theme.PanelTheme} ${Theme.PanelColorTheme[color]} ${Theme.ShadowTheme[shadow]}`;

  const hasHeader = !!title || !!actions;
  const contentTheme = hasHeader ? 'mt-4' : '';

  return (
    <div className={theme}>
      <div className="flex items-center justify-between">
        {title && (
          <Typography size="xsmall" weight="semibold" color={titleColor}>
            {title}
          </Typography>
        )}

        {actions && <div className="ml-4 flex">{actions}</div>}
      </div>

      <div className={contentTheme}>{children}</div>
    </div>
  );
};

Panel.displayName = 'Panel';

export default Panel;

import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType, SizeType } from '../../types';
import Line from '../line';
import Typography from '../typography';
import * as Theme from './theme';
export interface Props {
  children: ReactNode;
  title?: ReactNode;
  actions?: ReactNode;
  color?: ColorType;
  titleColor?: ColorType;
  shadow?: SizeType;
  description?: ReactNode;
  type?: 'default' | 'page';
}

const Panel: FunctionComponent<Props> = ({
  title,
  description,
  children,
  actions,
  color = 'white',
  titleColor = 'black',
  shadow = 'small',
  type = 'default',
}) => {
  const theme = `${Theme.PanelTheme} ${Theme.PanelColorTheme[color]} ${Theme.ShadowTheme[shadow]}`;

  const hasHeader = !!title || !!actions || !!description;
  const contentTheme = hasHeader ? 'mt-4' : '';
  const isPage = type === 'page';
  const titleSize = isPage ? 'extra' : 'xsmall';
  const titleWeight = isPage ? 'light' : 'semibold';

  return (
    <div className={theme}>
      <div className="flex items-center justify-between">
        {title && (
          <Typography
            as="div"
            size={titleSize}
            weight={titleWeight}
            color={titleColor}
          >
            {title}
          </Typography>
        )}

        {actions && <div className="ml-4 flex">{actions}</div>}
      </div>

      {description && (
        <div className="pt-2">
          <Typography as="div" size="small" weight="normal" color="gray">
            {description}
          </Typography>
        </div>
      )}

      {isPage && <Line />}

      <div className={contentTheme}>{children}</div>
    </div>
  );
};

Panel.displayName = 'Panel';

export default Panel;

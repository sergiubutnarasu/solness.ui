import React, {
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { ColorType, WeightType, SizeType } from '../../types';
import * as Theme from './theme';

export interface Props {
  children: ReactNode;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  size?: SizeType;
  color?: ColorType;
  weight?: WeightType;
  underline?: boolean;
}

const Typography: FunctionComponent<Props> = ({
  children,
  as = 'p',
  size = 'base',
  color = 'black',
  weight = 'normal',
  underline = false,
}) => {
  const Element = as;
  const underlineTheme = underline ? 'underline' : '';
  const theme = `m-0 ${Theme.TypographySizeTheme[size]} ${Theme.TypographyColorTheme[color]} ${Theme.TypographyWeightTheme[weight]} ${underlineTheme}`;

  return <Element className={theme}>{children}</Element>;
};

Typography.displayName = 'Typography';

export default Typography;

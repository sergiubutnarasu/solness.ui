import React, { FunctionComponent } from 'react';
import { ColorTheme, SizeTheme } from '../../theme';
import { ColorType, IconType, SizeType } from '../../types';
import { ICON_CONFIG } from './icon.config';

export interface Props {
  icon: IconType;

  // Specify the icon size
  size?: SizeType;

  // Specify the variant/color
  color?: ColorType;
}

const Icon: FunctionComponent<Props> = ({
  icon,
  size = 'base',
  color = 'black',
}) => {
  const iconSize = SizeTheme[size];
  const iconColor = ColorTheme[color];
  const IconComponent = ICON_CONFIG[icon];

  return <IconComponent size={iconSize} color={iconColor} />;
};

export default Icon;

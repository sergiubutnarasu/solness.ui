import React, { FunctionComponent } from 'react';
import { ColorType, SizeType } from '../../types';
import Icon from '../icon';
import { BulletSize, BulletTheme } from './theme';

export interface Props {
  // Show or hide the bullet
  enabled?: boolean;

  // Specify the icon size
  size?: SizeType;

  // Specify the variant/color
  color?: ColorType;

  onClick?: () => void;
}

const NotificationButton: FunctionComponent<Props> = ({
  enabled = false,
  size = 'base',
  color = 'gray',
  onClick,
}) => {
  const bulletClassNames = `${BulletTheme} ${BulletSize[size]}`;

  return (
    <span className="relative inline-flex cursor-pointer" onClick={onClick}>
      {enabled && <span className={bulletClassNames} />}
      <Icon icon="bell" size={size} color={color} />
    </span>
  );
};

NotificationButton.displayName = 'NotificationButton';

export default NotificationButton;

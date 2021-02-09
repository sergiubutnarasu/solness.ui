import React, { FunctionComponent } from 'react';
import { ColorType, HorizontalPosition, IconType, SizeType } from '../../types';
import Icon from '../icon';
import * as Theme from './theme';

export interface Props {
  type?: 'button' | 'submit';
  icon?: IconType;
  color?: ColorType;
  size?: SizeType;
  transparent?: boolean;
  iconPosition?: HorizontalPosition;
  iconColor?: ColorType;
  loading?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({
  type = 'button',
  icon,
  iconPosition = 'left',
  iconColor = 'white',
  children,
  color = 'indigo',
  size = 'base',
  transparent = false,
  loading = false,
  onClick,
}) => {
  const colorTheme = transparent ? '' : Theme.ButtonColorTheme[color];
  const sizeTheme = Theme.ButtonSizeTheme[size];
  const theme = `${Theme.ButtonTheme} ${colorTheme} ${sizeTheme}`;
  const buttonContentTheme = Theme.ButtonContentTheme(loading);

  let textPadding = iconPosition === 'left' ? 'pr-1' : 'pl-1';

  if (!icon) {
    textPadding = 'px-1';
  }

  const getIcon = (position: HorizontalPosition) => {
    if (!icon) {
      return null;
    }

    if (position !== iconPosition) {
      return null;
    }

    let iconMargin = position === 'left' ? 'mr-1' : 'ml-1';

    if (!children) {
      iconMargin = '';
    }

    return (
      <div className={`flex items-center ${iconMargin}`}>
        <Icon icon={icon} color={iconColor} size={size} />
      </div>
    );
  };

  return (
    <button className={theme} type={type} onClick={onClick}>
      {loading && (
        <div className="absolute left-0 right-0 flex justify-center items-center">
          <div className="animate-spin flex justify-center items-center">
            <Icon icon="loading" color={iconColor} size={size} />
          </div>
        </div>
      )}
      <div className={buttonContentTheme}>
        {getIcon('left')}
        {children && (
          <div className={`leading-none ${textPadding}`}>{children}</div>
        )}
        {getIcon('right')}
      </div>
    </button>
  );
};

Button.displayName = 'button';

export default Button;

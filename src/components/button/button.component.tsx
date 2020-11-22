import React, { ElementType, FunctionComponent, HTMLAttributes } from 'react';
import Icon from '../icon';
import { ColorType, HorizontalPosition, IconType, SizeType } from '../../types';
import * as Theme from './theme';

export interface Props {
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  icon?: IconType;
  color?: ColorType;
  size?: SizeType;
  transparent?: boolean;
  iconPosition?: HorizontalPosition;
}

const Button: FunctionComponent<Props> = ({
  as = 'button',
  icon,
  iconPosition = 'left',
  children,
  color = 'indigo',
  size = 'base',
  transparent = false,
}) => {
  const Element = as;

  const colorTheme = transparent ? '' : Theme.ButtonColorTheme[color];
  const sizeTheme = Theme.ButtonSizeTheme[size];
  const theme = `${Theme.ButtonTheme} ${colorTheme} ${sizeTheme}`;

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
        <Icon icon={icon} color="white" size={size} />
      </div>
    );
  };

  return (
    <Element className={theme}>
      {getIcon('left')}
      {children}
      {getIcon('right')}
    </Element>
  );
};

Button.displayName = 'button';

export default Button;

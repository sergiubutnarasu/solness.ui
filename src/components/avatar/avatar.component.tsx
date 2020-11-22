import React, { FunctionComponent } from 'react';
import { SizeType } from '../../types';
import Icon from '../icon';
import * as Theme from './theme';

export interface Props {
  url: string;
  size?: SizeType;
  title?: string;
  description?: string;
  showOptions?: boolean;
  onOptionClick?: () => void;
}

const Avatar: FunctionComponent<Props> = ({
  url,
  size = 'base',
  showOptions = false,
  title,
  description,
  onOptionClick,
}) => {
  const theme = `${Theme.AvatarTheme} ${Theme.AvatarSizeTheme[size]}`;
  const optionTheme = `${Theme.AvatarOptionTheme} ${Theme.AvatarOptionSizeTheme[size]}`;

  const isTextSectionVisible = !!title || !!description;

  return (
    <div>
      <div className={theme} style={{ backgroundImage: `url(${url})` }}>
        {showOptions && (
          <span className={optionTheme} onClick={onOptionClick}>
            <Icon icon="cog" size="xsmall" color="white" />
          </span>
        )}
      </div>

      {isTextSectionVisible && (
        <div className="text-center">
          {title && (
            <span className="block text-base text-gray-700 font-semibold mt-3">
              {title}
            </span>
          )}

          {description && (
            <span className="block text-xs text-gray-600 font-normal">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;

import React, { FunctionComponent, ReactNode } from 'react';
import Button from '../button';
import Typography from '../typography';
import * as Theme from './theme';

export interface Props {
  title: string;
  open?: boolean;
  children: ReactNode;
  size?: 'base' | 'medium' | 'small';
  onClose?: () => void;
}

const Modal: FunctionComponent<Props> = ({
  children,
  title,
  open = false,
  size = 'base',
  onClose,
}) => {
  if (!open) {
    return null;
  }

  const defaultTheme = `bg-white mt-16 mb-16 p-6 rounded-lg shadow-sm mx-auto`;
  const theme = `${defaultTheme} ${Theme.SizeTheme[size]}`;

  return (
    <div role="presentation" className={Theme.PresentationTheme}>
      <div role="dialog" className={theme}>
        <div className="mb-6 flex justify-between items-center">
          <Typography size="xsmall" weight="bold">
            {title.toUpperCase()}
          </Typography>

          <Button transparent icon="close" iconColor="gray" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

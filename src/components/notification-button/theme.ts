import { Size } from '../../enums';
import { SizeType } from '../../types';

export const BulletSize: Record<SizeType, string> = {
  [Size.xsmall]: 'w-1 h-1',
  [Size.small]: 'w-1 h-1',
  [Size.base]: 'w-2 h-2 border-2',
  [Size.large]: 'w-2 h-2 border-2',
  [Size.xlarge]: 'w-3 h-3 border-2',
  [Size.extra]: 'w-4 h-4 border-4',
};

export const BulletTheme =
  'top-0 right-0 absolute block rounded-full bg-red-500 border-solid border-white';

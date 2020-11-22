import { Size } from '../../enums';
import { SizeType } from '../../types';

export const AvatarTheme =
  'relative mr-auto ml-auto block bg-gray-200 rounded-full bg-no-repeat bg-cover bg-center';

export const AvatarOptionTheme =
  'absolute flex items-center justify-center bottom-0 right-0 bg-indigo-500 hover:bg-indigo-600 w-6 h-6 cursor-pointer rounded-full border-white ';

export const AvatarSizeTheme: Record<SizeType, string> = {
  [Size.xsmall]: 'w-4 h-4',
  [Size.small]: 'w-6 h-6',
  [Size.base]: 'w-8 h-8',
  [Size.large]: 'w-16 h-16',
  [Size.xlarge]: 'w-24 h-24',
  [Size.extra]: 'w-32 h-32',
};

export const AvatarOptionSizeTheme: Record<SizeType, string> = {
  [Size.xsmall]: 'hidden',
  [Size.small]: 'border-2 -mr-4',
  [Size.base]: 'border-2 mb-0 -mr-4',
  [Size.large]: 'border-2',
  [Size.xlarge]: 'border-2 mr-1 mb-1',
  [Size.extra]: 'border-2 mr-2 mb-2',
};

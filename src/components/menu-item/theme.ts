import { Size } from '../../enums';
import { SizeType } from '../../types';

export const MenuItemTheme =
  'flex items-center cursor-pointer w-full mb-1 text-blue-900 hover:bg-gray-50 font-medium rounded-lg';

export const MenuItemActive = 'bg-indigo-50 hover:bg-indigo-50';

export type Sizes = Extract<SizeType, 'small' | 'base'>;

export const MenuItemSize: Record<Sizes, string> = {
  [Size.small]: 'text-xs py-2 px-4',
  [Size.base]: 'text-sm py-3 px-6',
};

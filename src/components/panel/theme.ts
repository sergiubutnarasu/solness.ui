import { Color, Size } from '../../enums';
import { ColorType, SizeType } from '../../types';

export const PanelTheme = 'rounded-lg flex-grow flex-basis-0 p-6 mb-8';

export const PanelColorTheme: Record<ColorType, string> = {
  [Color.black]: 'bg-black text-white',
  [Color.blue]: 'bg-custom-blue',
  [Color.gray]: 'bg-gray-500',
  [Color.green]: 'bg-green-500',
  [Color.indigo]: 'bg-indigo-800 text-white',
  [Color.orange]: 'bg-orange-500',
  [Color.pink]: 'bg-pink-500',
  [Color.purple]: 'bg-purple-900 text-white',
  [Color.red]: 'bg-red-500',
  [Color.teal]: 'bg-teal-500',
  [Color.white]: 'bg-white',
  [Color.yellow]: 'bg-yellow-500',
};

export const ShadowTheme: Record<SizeType, string> = {
  [Size.base]: '',
  [Size.extra]: 'shadow-2xl',
  [Size.large]: 'shadow-lg',
  [Size.small]: 'shadow-sm',
  [Size.xlarge]: 'shadow-xl',
  [Size.xsmall]: '',
};

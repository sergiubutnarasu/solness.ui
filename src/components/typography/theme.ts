import { Color, Size, Weight } from '../../enums';
import { ColorType, SizeType, WeightType } from '../../types';

export const TypographySizeTheme: Record<SizeType, string> = {
  [Size.xsmall]: 'text-xs',
  [Size.small]: 'text-sm',
  [Size.base]: 'text-base',
  [Size.large]: 'text-lg',
  [Size.xlarge]: 'text-xl',
  [Size.extra]: 'text-3xl',
};

export const TypographyColorTheme: Record<ColorType, string> = {
  [Color.black]: 'text-gray-800',
  [Color.blue]: 'text-blue-900',
  [Color.gray]: 'text-gray-600',
  [Color.green]: 'text-green-500',
  [Color.indigo]: 'text-indigo-500',
  [Color.orange]: 'text-orange-500',
  [Color.pink]: 'text-pink-500',
  [Color.purple]: 'text-purple-500',
  [Color.red]: 'text-red-500',
  [Color.teal]: 'text-teal-500',
  [Color.white]: 'text-white',
  [Color.yellow]: 'text-yellow-500',
};

export const TypographyWeightTheme: Record<WeightType, string> = {
  [Weight.black]: 'font-black',
  [Weight.bold]: 'font-bold',
  [Weight.extrabold]: 'font-extrabold',
  [Weight.hairline]: 'font-hairline',
  [Weight.light]: 'font-light',
  [Weight.medium]: 'font-medium',
  [Weight.normal]: 'font-normal',
  [Weight.semibold]: 'font-semibold',
  [Weight.thin]: 'font-thin',
};

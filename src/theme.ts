import { Size, Color, Variant } from './enums';
import { SizeType, ColorType, VariantType } from './types';

export const ColorTheme: Record<ColorType, string> = {
  [Color.black]: 'rgb(45, 55, 72)',
  [Color.blue]: 'rgb(66, 153, 225)',
  [Color.gray]: 'rgb(160, 174, 192)',
  [Color.green]: 'rgb(72, 187, 120)',
  [Color.indigo]: 'rgb(102, 126, 234)',
  [Color.orange]: 'rgb(237, 137, 54)',
  [Color.pink]: 'rgb(237, 100, 166)',
  [Color.purple]: 'rgb(159, 122, 234)',
  [Color.red]: 'rgb(245, 101, 101)',
  [Color.teal]: 'rgb(56, 178, 172)',
  [Color.white]: 'rgb(255, 255, 255)',
  [Color.yellow]: 'rgb(246, 224, 94)',
};

export const VariantTheme: Record<VariantType, string> = {
  [Variant.primary]: 'rgb(66, 153, 225)',
  [Variant.secondary]: 'rgb(66, 153, 225)',
  [Variant.basic]: 'rgb(74, 85, 104)',
  [Variant.danger]: 'rgb(245, 101, 101)',
  [Variant.success]: 'rgb(72, 187, 120)',
};

export const SizeTheme: Record<SizeType, string> = {
  [Size.xsmall]: '0.875rem',
  [Size.small]: '1rem',
  [Size.base]: '1.25rem',
  [Size.large]: '1.5rem',
  [Size.xlarge]: '2rem',
  [Size.extra]: '3rem',
};

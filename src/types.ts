import {
  AlignItem,
  Color,
  FlexDirection,
  Icon,
  JustifyContent,
  Size,
  Variant,
  Weight,
} from './enums';

export type AlignItemType = keyof typeof AlignItem;
export type ColorType = keyof typeof Color;
export type IconType = keyof typeof Icon;
export type JustifyContentType = keyof typeof JustifyContent;
export type SizeType = keyof typeof Size;
export type VariantType = keyof typeof Variant;
export type FlexDirectionType = keyof typeof FlexDirection;
export type WeightType = keyof typeof Weight;

export type IconProps = {
  size?: string | number;
  color?: string;
};

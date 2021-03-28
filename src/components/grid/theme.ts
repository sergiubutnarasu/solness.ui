import { AlignItem } from '../../enums';
import { AlignItemType } from '../../types';

export const GridAlignTheme: Record<AlignItemType, string> = {
  [AlignItem.baseline]: 'items-baseline',
  [AlignItem.center]: 'items-center',
  [AlignItem.end]: 'items-end',
  [AlignItem.none]: '',
  [AlignItem.start]: 'items-start',
  [AlignItem.stretch]: 'items-stretch',
};

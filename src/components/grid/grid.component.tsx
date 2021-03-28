import { AlignItemType } from '@solness/ui/types';
import React, { FunctionComponent } from 'react';
import GridItem from '../grid-item';
import * as Theme from './theme';
interface GridProps {
  Item: typeof GridItem;
}

export interface Props {
  columns?: number;
  gap?: number;
  bottom?: number;
  align?: AlignItemType;
}

const Grid: FunctionComponent<Props> & GridProps = ({
  children,
  columns = 2,
  gap = 6,
  bottom = 0,
  align = 'center',
}) => {
  const theme = `grid grid-cols-${columns} gap-${gap} mb-${bottom} ${Theme.GridAlignTheme[align]}`;

  return <div className={theme}>{children}</div>;
};

Grid.Item = GridItem;

export default Grid;

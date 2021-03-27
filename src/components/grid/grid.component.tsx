import React, { FunctionComponent } from 'react';
import GridItem from '../grid-item';

interface GridProps {
  Item: typeof GridItem;
}

export interface Props {
  columns?: number;
  gap?: number;
  bottom?: number;
}

const Grid: FunctionComponent<Props> & GridProps = ({
  children,
  columns = 2,
  gap = 4,
  bottom = 0,
}) => {
  const theme = `grid grid-cols-${columns} gap-${gap} mb-${bottom} items-center`;

  return <div className={theme}>{children}</div>;
};

Grid.Item = GridItem;

export default Grid;

import React, { FunctionComponent, ReactNode } from 'react';
import Line from '../line';
import Typography from '../typography';

export interface Props {
  title: ReactNode;
  description?: ReactNode;
}

const Section: FunctionComponent<Props> = ({
  title,
  description,
  children,
}) => (
  <div>
    <div className="mb-8">
      <Typography as="div" weight="medium">
        {title}
      </Typography>

      {description && (
        <div className="pt-4">
          <Typography as="div" size="small" color="gray">
            {description}
          </Typography>
        </div>
      )}
    </div>

    <div>{children}</div>

    <Line />
  </div>
);

export default Section;

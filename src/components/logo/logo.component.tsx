import React, { FunctionComponent } from 'react';
import Icon from '../icon';

const Logo: FunctionComponent = () => (
  <div className="flex items-center">
    <div className="flex items-center mr-1">
      <Icon icon="collection" color="indigo" />
    </div>

    <span className="lowercase font-bold text-xs text-indigo-500">Solness</span>
  </div>
);

Logo.displayName = 'Logo';

export default Logo;

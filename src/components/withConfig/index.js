import React from 'react';

import config from './config';

const withConfig = Component => props => {
  return <Component config={config} {...props} />
};

export default withConfig;

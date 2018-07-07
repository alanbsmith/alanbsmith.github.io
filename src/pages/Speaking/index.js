import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import withConfig from '../../components/withConfig';

function Speaking({ config }) {
  return (
    <Fragment>
      <Header>
        <Header.Logo />
        <Header.Text>
          Speaking
        </Header.Text>
      </Header>
      <Menu config={config} />
    </Fragment>
  );
}

export default withConfig(Speaking);

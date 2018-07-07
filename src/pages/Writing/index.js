import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import withConfig from '../../components/withConfig';

function Writing({ config }) {
  return (
    <Fragment>
      <Header>
        <Header.Logo />
        <Header.Text>
          Writing
        </Header.Text>
      </Header>
      <Menu config={config} />
    </Fragment>
  );
}

export default withConfig(Writing);

import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import withConfig from '../../components/withConfig';

function OpenSource({ config }) {
  return (
    <Fragment>
      <Header>
        <Header.Logo />
        <Header.Text>
          Open Source
        </Header.Text>
      </Header>
      <Menu config={config} />
    </Fragment>
  );
}

export default withConfig(OpenSource);

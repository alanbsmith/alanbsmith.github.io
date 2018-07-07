import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import withConfig from '../../components/withConfig';

function About({ config }) {
  return (
    <Fragment>
      <Header>
        <Header.Logo />
        <Header.Text>
          About
        </Header.Text>
      </Header>
      <Menu config={config} />
    </Fragment>
  );
}

export default withConfig(About);

import React from 'react';

import Box from '../Box';
import Grid from '../Grid';
import Header from '../Header';

// Container
// - Row
// -- Box flex=2, icon=writing, label=writing to=writing
// -- Box flex=3, icon=speaking, label=speaking to=speaking
//
// - Row
// -- Container flex=3
// --- Box flex=2, icon=about, label=about modifiers=hero to=hero
// --- Row
// ---- Box flex=1, icon=github, label=github to=github
// ---- Box flex=1, icon=recipes, label=recipes to=recipes
// -- Container
// --- Box flex=1, icon=openSource, label=open source to=open-source
// --- Box flex=2, icon=design, label=design to=design
//
// - Row
// -- Box flex=3, icon=twitter, label=twitter to=twitter
// -- Box flex=2, icon=medium, label=medium to=medium
//
// - Row
// -- Box flex=1, icon=email, label=email to=email
// -- Box flex=3, icon=tinyletter, label=tinyletter to=tinyletter

function buildMenu(config) {
  return config.map((item, i) => {
    if (item.type === 'Row') {
      return (
        <Grid.Row key={i}>
          {buildMenu(item.children)}
        </Grid.Row>
      );
    }

    if (item.type === 'Box') {
      return (
        <Box key={i} to={item.to} external={item.external} flex={item.flex} modifiers={[item.modifiers]}>
          <Box.Icon name={item.icon} modifiers={[item.modifiers]} />
          <Box.Text>
            {item.label}
          </Box.Text>
        </Box>
      );
    }

    if (item.type === 'Container') {
      return (
        <Grid.Container key={i} flex={item.flex}>
          {buildMenu(item.children)}
        </Grid.Container>
      )
    }
  })
}

function Menu({ config }) {

  return (
    <Grid.Container>
      {buildMenu(config)}
    </Grid.Container>
  );
}

export default Menu;

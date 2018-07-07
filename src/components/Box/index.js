import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { applyStyleModifiers } from 'styled-components-modifiers';

import Icon from './Icon';
import Text from './Text';

const modifiers = {
  hero: () => `
    flex: 0 0 300px;
    @media(max-width: 600px) {
      flex: 0 0 175px;
    }
  `,
};

const StyledBox = styled(Link)`
  align-items: center;
  background: #fff;
  box-shadow: 2px 2px 4px 0 #ddd;
  display: flex;
  flex: ${props => props.flex};
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: 10px;
  min-width: 150px;
  padding: 10px;
  text-align: center;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: #353535;

  &:hover, &:focus {
    transform: scale(1.05);
    span {
      border-color: #353535;
    }
  }

  @media(max-width: 600px) {
    min-width: 75px;
    height: 125px;
    margin: 5px;
  }

  ${applyStyleModifiers(modifiers)}
`;

function Box({external, to, ...props}) {
  if (external) {
    const BoxComponent = StyledBox.withComponent('a');
    return <BoxComponent target="_blank" rel="noopener" href={to} {...props} />
  }

  return <StyledBox to={to} {...props} />;
}

Box.defaultProps = {
  flex: 'initial',
};

Box.Icon = Icon;
Box.Text = Text;

export default Box;

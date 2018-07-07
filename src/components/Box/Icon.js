import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  hero: () => `
    height: 60px;
    width: 60px;
  `,
};

import about from '../../assets/images/about.svg';
import design from '../../assets/images/design.svg';
import openSource from '../../assets/images/open-source.svg';
import recipes from '../../assets/images/recipes.svg';
import speaking from '../../assets/images/speaking.svg';
import writing from '../../assets/images/writing.svg';


const ICON_MAP = {
  about,
  design,
  openSource,
  recipes,
  speaking,
  writing,
};

const Icon = styled.div`
  background-image: url(${props => ICON_MAP[props.name]});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: #353535;
  height: 30px;
  margin: 8px;
  width: 30px;
  ${applyStyleModifiers(modifiers)}
`;

Icon.defaultProps = {
  name: 'writing',
}

export default Icon;

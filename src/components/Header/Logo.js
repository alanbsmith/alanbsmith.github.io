import styled from 'styled-components';

import logo from '../../assets/images/logo.png';
import writing from '../../assets/images/writing.svg';

const ICON_MAP = {
  logo,
  writing,
};

const Logo = styled.div`
  background-image: url(${props => ICON_MAP[props.icon]});
  height: 200px;
  width: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 20px;

  @media(max-width: 600px) {
    height: 150px;
    width: 150px;
  }
`;

Logo.defaultProps = {
  icon: 'logo',
};

export default Logo;

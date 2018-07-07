import styled from 'styled-components';

import Logo from './Logo';
import Text from './Text';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  @media(max-width: 600px) {
    min-height: 300px;
  }
`;

Header.Logo = Logo;
Header.Text = Text;

export default Header;

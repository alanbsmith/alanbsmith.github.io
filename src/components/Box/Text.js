import styled from 'styled-components';

const Text = styled.span`
  display: inline-block;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #353535;
  border-bottom: solid 1px transparent;

  @media(max-width: 600px) {
    font-size: 12px;
    letter-spacing: 2px;
    transition: all 200ms ease;
  }
`;

export default Text;

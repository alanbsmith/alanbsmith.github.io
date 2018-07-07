import styled from 'styled-components';

const Text = styled.div`
  font-size: 24px;
  letter-spacing: 20px;
  font-weight: 400;
  text-transform: uppercase;
  padding-left: 20px;

  @media(max-width: 600px) {
    font-size: 18px;
    letter-spacing: 10px;
    padding-left: 10px;
  }
`;

export default Text;

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
`;

Container.defaultProps = {
  flex: '0',
};

export default Container;

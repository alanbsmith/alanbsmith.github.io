import React, { Fragment } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Link from 'gatsby-link';
import styled from 'styled-components';

import buildGlobalStyles from '../utils/buildGlobalStyles';
import theme from '../utils/theme';

injectGlobal([buildGlobalStyles(theme)]);

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {props.children()}
      </div>
    </ThemeProvider>
  )
}

export default Layout;

// const Code = styled.code`
//   background-color: tomato;
// `;


// const LayoutBlock = styled.section`
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   flex: 1;
// `;

// const Header = styled.header`
//   border-bottom: solid 1px ${props => props.theme.colors.chrome200};
//   height: 5rem;
// `

// const Content = styled.section`
//   display: flex;
//   flex: 1;
// `;

// const Nav = styled.section`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   max-height: calc(100vh - 5rem);
// `

// const Body = styled.section`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   max-height: calc(100vh - 5rem);
//   flex: 1;
//   overflow-y: scroll;
// `

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import {theme} from './Styles/Themes';

// internal style add from themes
const Button = styled.button`
  color : ${({ theme }) => theme.btn1.textColor};
  font-size: ${({ theme }) => theme.btn1.size};
`;


const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button>Button is styled with internal "styled" component and theme imported</Button><br /><br /><br />
        <button>Button is styled with "GlobalStyle" component and theme imported</button>
        <p>Hello</p>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;

// we make different file for theme then we can import them accordingly in files we want, file is Themes.js in Styles Folder

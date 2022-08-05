import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const theme= {
  textColor:"red",
  size:"30px",
};

const Button = styled.button`
    color : ${({theme})=>theme.textColor};
    font-size: ${({theme})=> theme.size};
`;


const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button>Howdy ?</Button>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;

// Its like context Api like we make a global properties and we just have to add that for 
// styling the react

// 1. import ThemeProvider
// 2. wrap all the components inside ThemeProvider component and add a prop named theme with value theme inside it
// 3. make an theme object and then write the content 
// 4. include it whereever you want it in styled components with syntax is bit different
// use it like we use props in styled component but as a destructured object
// ie always use {} inside () 
// SYntax :-  ${ ( { theme } ) => them.objectKey };


// we ue themeprovider as a warehouse as we can put all the code in seperate file and import in
// any of the file to use the styles in theme object
//( you see how to do it global in folder 21.4.2)
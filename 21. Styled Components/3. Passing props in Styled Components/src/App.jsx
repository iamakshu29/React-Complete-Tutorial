import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color:green;
  border:3px solid black;
  border-radius:50px;
  font-size:30px;
  background-color:${(props)=>props.bg};

  &:hover{
    color:blue;
  }
`;

// passing props object then get value using . operator



const Para = styled.p`
  font-size:${({fSize})=>fSize};
`;
// object destructuring



const App = () => {
  return (
    <React.Fragment>
      <Button bg="orange">Subscribe</Button>
      <Para fSize="30px">Hello world</Para>
    </React.Fragment>
  )
}

export default App;

// we can send the css styles as props from components to style css 
// when we use JS in JSX we use {} pair
// but 
// when we have to use js in css then we use ${}  then pass a fat arrow function and write it 
// we can also use object destructuring
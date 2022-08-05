import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color:hotpink;
  border:3px solid black;
  border-radius:50px;
  font-size:30px;
`;

const Para = styled.p`
  color:red;
  font-size:30px;
`;


const Wrapper = styled.section`
  *{
    font-size:40px;
  }

  p{
    color:lightgreen;
  }

  .btn{
    border-radius:50px;
    border:2px dotted purple;
    color:orange;
  }
`

const App = () => {
  return (
    <React.Fragment>
      <Button>Subscribe</Button>
      <Para>Hello</Para>

      <Wrapper>
        <button className='btn'>Button with class Inside wrapper</button>
        <p>Inside Wrapper tooo</p>
      </Wrapper>


    </React.Fragment>
  )
}

export default App;

import React from 'react';
import styled from 'styled-components';


let favColor = "purple";

const Button = styled.button`
  color:hotpink;
  border:3px solid black;
  border-radius:50px;
  font-size:30px;

  &:hover{
    color:green;
  }

  &:before{
    content:"🙏";
  }

  span{
    color:${favColor};

    &:hover{
      color:orange;
    }

      .boldy{
        font-size:50px;
        color:red;    
        text-decoration:underline;

      &:hover{
        text-decoration:none;
      }
    }
  }

  


`;

const App = () => {
  return (
    <React.Fragment>
      <Button>
        Subscribe &nbsp;
        <span>Akshat &nbsp; <b className='boldy'>Technical</b></span>
      </Button>
    </React.Fragment>
  )
}

export default App;

// NESTING :-

// we can use pseudo class like hover and active and elements like before,after using &: it means styled component takes & as same as parent component
// we can do nesting ie compnents inside components and style them as well using nested styled components


//VARIABLE :-

// can use variable for example you want a particular things at many place then put it in variable and then define it
// SYntax :-
// let favColor = "green";
// color:${favColor};
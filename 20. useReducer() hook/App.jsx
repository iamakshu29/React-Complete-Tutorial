import React, { useReducer } from 'react';


//* the reducer function can be defined inside the APP component,outside the component(like i did currently), or in another file(which we see in Redux tutorial)

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    if (state > 0) {
      return state - 1;
    }
    else {
      alert("can't go negative");
    }
  }
  return state;
}

//TODO can use switch(action.type) if there are multiple if else statement instead of if- if ladder


const App = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  const incre = () => {
    dispatch({ type: "Increment" });
  }

  return (
    <React.Fragment>
      <h1>{state}</h1>
      <button onClick={incre}>Inc</button>
      <button onClick={() => { dispatch({ type: "Decrement" }) }}>Dec</button>
    </React.Fragment>
  )
};

export default App;


// const[state,dispatch] = useReducer(reducer, initialState) hook
//* It is used to handle big projects or multiple states simultaneously
//* useReducer() method returns two value state & dispatch

//* It works as same as useState() hook but useState() is for small projects

// reducer is a function which takes two args
//* const reducer = (currState, action)=>{}

//* main work of dispatch is to trigger the action is an object which have type as value in reducer();
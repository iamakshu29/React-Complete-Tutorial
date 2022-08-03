//* Hooks Introduction   Intoduced in v16

//* Hooks are type of method which returns 2 value in an array.
//* It is used to terminate the use of classes and make the code simpler
//! does not work inside classes 
//* should always be used at the top or just after the function define 

import React, {useState} from 'react';


const App = () => {
    // const state = useState();
    
    //* array destructuring is done to get the 2 value from array which usestate() method returns
    const [count,setCount] = useState(100);

    const IncNum = ()=>{
        setCount(count+1);
        // if(count > 51)
        // {
        //     setCount(count-10);
        // }
        // else if(count <= 50)
        // {
        //     setCount(count+5);
        // }
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum} > Click Me </button>
        </>
    );
};

export default App;


// useState() function is an array which return two items useState[current Data, Updated Data];
// the value inside useState(3) function is called initial data =>  useState(initialData);
// Syntax => const state = useState();

//* After Array destructuring =>
// const [count,setCount] = useState(5);
// the value of initialData is passed to currentData

// here 5 is initialData and count is currentData and setCount is a function or Updated Data


// what we did upwards :-
// we simply initialize the state with 0 and the current data here it is count will take the 
// initial Data ie 0 automatically at first .....so current Data ie count = 0 
// then we use the second element of array ie we use a function setCount 
// the value passed in the updated Data or in the function becomes the current Data ie the value of count is equal to updated date of the array..
// thats why we call the setCount() function and in func we increment count value by 1
// so when ever we call the IncNum() function the value updated and become the current value and display the update value


// we can also apply if else conditions in hooks
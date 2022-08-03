import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState("");
    const [printName, setPrintName] = useState(" ");

    const inputEvent = (event) => {
        // console.log(event.target.value);
        const value = event.target.value;
        setName(value);
    }

    const display = ()=>{
        setPrintName(name);
    };

    return (
        <React.Fragment>
            <h1>Hello {printName}</h1>
            <input type='text' placeholder="Enter your name"  onChange={inputEvent} value={name} />
            <button onClick = {display} >Click Me !!</button>
        </React.Fragment>
    );
};


export default App;


//* Related to syntax and Input tag and its method

// use camelCase while declaring events like onClick onMouseEnter onDoubleClick  
// and don't add () after the function name while calling the function in events 
// use hooks while changing the state with events ...


//* here we have to understand that the form element like input field, textarea are all controlled components 
//* ie the value inside these element is controlled by react not by these element like in javaScript
// the simple meaning of above lines are :- we can't grab the value of these element by simply using 
// <element>.value syntax (input.value)  like we did in javaScript

// we have to use the onChange event handler in input tag, 
//* onChange() method return an object which we can call as event and event object contains multiple values inside it
//* the value which written inside the input tag is target and can be extracted by event.target.value
//* and to change the state of tag or elements by using that value we use hooks();

// only then we can use the value in other places like we did above 

//TODO how code works :-
//first we use onChange to get the value from input tag and use the useState case 
// but in <p> it update along with the value in input like when we add ot delete value in tag

// we want the value in <p> to be static so we make call another method solve when we click on button using onClick()

//* 1st useState()
// it takes the updated value from first  useState() hook which is stored in 'name'

//* working of useState() Hook
/* (as we know 
    const[name, setName] = useState("");
    firstly name consist value inside useState args ie "";
    then when we pass value in setName ie setName("AKshat")
    then name is update to "Akshat" form  ""
    it means the name stores the current value then the updated value
)*/

//* 2nd useState()
// now we implement another hook and put the name value in setPrintName(name) to update the value of printName
// then pass the printName in <p> tag..
import React, { useState } from 'react';

const App = () => {
    const [fname, setFName] = useState(" ");
    const [lname,setLName] = useState(" ");
    const [printFName, setPrintFName] = useState(" ");
    const [printLName,setPrintLName] = useState(" ");

    const inputEvent = (event) => {
        // console.log(event.target.value);
        setFName(event.target.value);
    }

    const inputEventTwo = (event)=>{
        setLName(event.target.value);
    }

    const displayName = (event)=>{
        event.preventDefault();
        setPrintFName(fname);
        setPrintLName(lname);
    };

    // const display = (event)=>{
    //     setPrintFName(fname);
    //     setPrintLName(lname);
    // };

    
// to prevent the default behaviour of refresh page after submits the data we use event.preventDefault() coz of this page doesnot refresh
// event is an object return by onSubmit() method preventDefault() is a value in event of object which is called using . operator


    return (
        <React.Fragment>
            <h1>Hello {printFName} {printLName} </h1>
            <form onSubmit = {displayName} >
            <input type='text' placeholder="Enter your first name"  onChange={inputEvent} value={fname} />
            <input type='text' placeholder="Enter your last name"  onChange={inputEventTwo} value={lname} />
            {/* <button type='submit' onClick = {display} >Click Me !!</button> */}
            <button type='submit' >Click Me !!</button> 
            </form>
        </React.Fragment>
    );
};


export default App;

// we add two extra things 
//* 1. we put the all the form elements in a form tag
//* 2. we define the button type to submit earlier it was just a clickable button

//* Instead of make button as onClick we can make it submit type
// which means that when enter after we write the value form is submit and when we click the button the
// onSubmit method invokes isntead of click becosue of the submit type of button

// try uncommenting the button onclick and display method and commenting button submit and setPrint in displayName() 
//* Both methods works similar
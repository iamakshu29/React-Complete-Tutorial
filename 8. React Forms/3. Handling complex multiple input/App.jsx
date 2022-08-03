import React, { useState } from 'react';

const App = () => {
    const details = {
        fName: "", lName: "", email: "", phone: ""
    }
    const [fullName, setFullName] = useState(details);

    const [printName, setPrintName] = useState(details);

    const inputEvent = (event) => {
        // console.log(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;
        // just like we do array destructuring we can also do object destructuring as event.target is an object but here then names remain same ie we cant do valuee or naame 

//* can also write it in this way it is a bit harder to understand but it is given in React docs (Both works fine)
        // const {target:{name,value}} = event;


        setFullName((prevValue) => {
            if (name === 'fName') {
                return ({
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email,
                    phone: prevValue.phone
                });
            }
            else if (name === 'lName') {
                return ({
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email,
                    phone: prevValue.phone
                });
            }
            else if (name === 'email') {
                return ({
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value,
                    phone: prevValue.phone
                });
            }
            else if (name === 'phone') {
                return ({
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: prevValue.email,
                    phone: value
                });
            }
        });
    }

    //* Explaination of inputEvent()
    // what we do in this func is, we just grab the value of two attribute 1. value of input element and 2. name of input element
    // in if-else condition, we check if the input element in which we enter some value conatins name as 'fname' then we update the value of fname key in details object in useState() and give other keys like email lname its prevValue by returning the object
    // and do same with other keys :- lName, email, phone
    //* remember prevValue is also an object contains all the previously Stored Value which we can update

    const displayName = (event) => {
        event.preventDefault();
        setPrintName(fullName);
    };


    // to prevent the default behaviour of refresh page after submits the data we use event.preventDefault();
    // coz of this page doesnot refresh




    return (
        <React.Fragment>
            <h1>Hello {printName.fName} {printName.lName} </h1>
            <p> {printName.email} </p>
            <p> {printName.phone} </p>
            <form onSubmit={displayName} >
                <input type='text' name='fName' placeholder="Enter your name" onChange={inputEvent} />
                <input type='text' name='lName' placeholder="Enter your last name" onChange={inputEvent} />
                <input type='email' name='email' placeholder="Enter your Email-id" onChange={inputEvent} />
                <input type='number' name='phone' placeholder="Enter your Phone Number" onChange={inputEvent} />
                <button type='submit' >Click Me !!</button>
            </form>
        </React.Fragment>
    );
};


export default App;


//*  Handling complex Multiple Input
 //! First Change
// what we do here is, we make an object in useState(), so that we can take multiple values in single useState(),  instead of making multiple useState()....everytime we need to change a state
// when we use objects in useState(), then during the updation of any value ie as in setName() func.... we have to update the whole object,
// if we did not want to do so then, we easily return the prevValue to that key which we don't want to update..
//* Like we did above in if-else loop we update one of the keys ie fName, lName, phone or email and return the others with its prevValue but we return the whole object


 //! Second Change
// AND we also place the value of all input in a single method inputEvent() to reduce the code 
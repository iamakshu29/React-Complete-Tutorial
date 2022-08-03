import React, { useState } from 'react';
import Input from './Input';

const App = () => {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: ""
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;
        // just like we do array destructuring we can also do object destructuring but here then names remain same ie we cant do valuee or naame 


        setFullName((prevValue) => {
            return ({
                ...prevValue,
                [name]: value
            });

            //! This is short form of below long code 

            //* In first line
            //* In ...preValue :-   ... means spreadOperator 
            // spreadOperator copies all the value of that object or array (it works on both)
            // As we know prevValue Object contain all the existing value of object fullName so we use ...prevValue 

            // * MOST IMPORTANT
            //* Instead of using the callback function and take prevValue as an arguement we can directly write like this cuz object is in useState({})
            //* all value in useState is taken by fullName as current value so no need to pass prevValue then update prevValue which will eventually goes to fullName
            //*Instead we directly pass the fullName
            //? below line is also a object destructing
            //* setFullName({...fullName,[name]:value})

            //* ie simply don't use calback function use the current state instead of prevValue args and simple wrote the same which we wrote after return statement
            //TODO If u don't understand the example here watch the latest version of TO DO LIST in folder number 17 

            //* now for 2nd line
            // [name]: value} is powerful because it allows you handle your input field change events in one simple line
            // In Javascript, when you create an object literal {} and you wrap the object’s key in array brackets [key] you can dynamically set that key.
            // It means when you change any input field then with the help of event.target the syntax [name]:value
            // automatically take the key as name from event.target.name and value from event.target.value.

            //! Note :- we only need to add only these 2 lines no matter how many input elements are there
            //! we just need to add an extra input element and a tag to show the vlaue of that element
            //! like in h1 we so {fullName.fname}


            //TODO Code that become shorter above

            // if (name === 'fName') {
            //     return ({
            //         fName: value,
            //         lName: prevValue.lName,
            //         email: prevValue.email,
            //         phone: prevValue.phone
            //     });
            // }
            // else if (name === 'lName') {
            //     return ({
            //         fName: prevValue.fName,
            //         lName: value,
            //         email: prevValue.email,
            //         phone: prevValue.phone
            //     });
            // }
            // else if (name === 'email') {
            //     return ({
            //         fName: prevValue.fName,
            //         lName: prevValue.lName,
            //         email: value,
            //         phone: prevValue.phone
            //     });
            // }
            // else if (name === 'phone') {
            //     return ({
            //         fName: prevValue.fName,
            //         lName: prevValue.lName,
            //         email: prevValue.email,
            //         phone: value
            //     });
            // }


        });
    }

    const displayName = (event) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <h1>Hello {fullName.fName} {fullName.lName} </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>
            <form onSubmit={displayName} >

                {/* <input type='text' name='fName' placeholder="Enter your name" onChange={inputEvent} />
                <input type='text' name='lName' placeholder="Enter your last name" onChange={inputEvent} />
                <input type='email' name='email' placeholder="Enter your Email-id" onChange={inputEvent} />
                <input type='number' name='phone' placeholder="Enter your Phone Number" onChange={inputEvent} /> */}
            
                <Input
                    place="Enter your first name"
                    Name="fname"
                    func={inputEvent}
                />
                <Input
                    place="Enter your last name"
                    Name="lName"
                    func={inputEvent}
                />
                <Input
                    place="Enter your email-id"
                    Name="email"
                    func={inputEvent}
                />
                <Input
                    place="Enter your phone number"
                    Name="phone"
                    func={inputEvent}
                />
                <button type='submit' >Click Me !!</button>
            </form>
        </React.Fragment>
    );
};


export default App;

//! NOTE
// make it even more shorter than the video by adding props of input 
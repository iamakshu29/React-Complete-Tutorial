import React, {useContext} from 'react';
import { FirstName, LastName, Age } from './App';


const CompC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const age = useContext(Age);
    return (
       <h1>My name is {lname} and fname is  {fname} and my age is {age} </h1>

    )
}


export default CompC;



  
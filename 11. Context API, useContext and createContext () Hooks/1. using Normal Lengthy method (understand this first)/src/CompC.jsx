import React from 'react';
import { FirstName, LastName } from './App';


const CompC = () => {
    return (
        <FirstName.Consumer>
            {(fname) => {
                return (
                    <LastName.Consumer>
                        {(lname) => {
                            return (
                                <h1> Hello I am {fname} {lname} </h1>
                            );
                        }}
                    </LastName.Consumer>// here the consumer level of context is there
                )
            }}
        </FirstName.Consumer >

    )
}


export default CompC;



  
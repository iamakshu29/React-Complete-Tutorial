import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

const App = () => {

    return (
        <>
            <FirstName.Provider value={'Akshu'}>
                <LastName.Provider value={'Verma'}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
};

export default App;
export { FirstName,LastName };




//* React Hooks provides a concept call Context

//!  we require three things
//  1. Create Context
// it creates the context component  

//  2. Provider Context  
//it provides the value which needs to change in componentName.provider

//  3. Consumer Context
// the consumer conponent always takes a callback function in which the parameter is the value
// given by the context Provider component


// React Context API allows you to easily access data at different levels of the component tree,
// without passing prop to every level

// ie 
// parent
//   |
// CompA
//   |
// CompB
//   |
// CompC

//* what context API do for us is if we have to send the data from parent to CompC then
//* we send it directly without any interference of CompA and CompB  
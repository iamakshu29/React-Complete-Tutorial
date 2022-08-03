import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();
const Age = createContext();

const App = () => {

    return (
        <>
            <FirstName.Provider value={'Akshu'}>
                <LastName.Provider value={'Verma'}>
                    <Age.Provider value={20}>
                    <CompA />
                    </Age.Provider>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
};

export default App;
export { FirstName,LastName, Age };





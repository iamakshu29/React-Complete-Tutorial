import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';

function App() {
    const Time = ()=>{
        const date = new Date().toLocaleDateString();
        return (
            <p>{date}</p>
        )
    }
    return (
        <>
            <Heading></Heading>
            <Time />
            <Para />
            <Heading />
            <List />
        </>
    );
}

export default App;


// to return the multiple componenets we use react.fragments ie <> </>

// we can also make component as a functional Component on same page
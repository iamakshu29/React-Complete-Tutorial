import React from 'react';
import Accordian from './Accordian';
import SetData from './SetData';


const App = () => {
    return (
        <React.Fragment>
            {SetData.map((val) => {
                const { id } = val;
                return <Accordian
                    key={id} {...val}
                />
            })}

        </React.Fragment>
    )
};

export default App;

//* New method of define attributes of props
//? we know SetData is an array of objects and val is an ele of an array which is an object
//? so we can perform object destructuring on val thats why we add key using object destructing and send the rest of value using "REST OPERATOR"

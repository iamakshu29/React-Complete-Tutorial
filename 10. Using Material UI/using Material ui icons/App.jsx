import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const App = () => {
    const [stat, setstat] = useState(0);
    const increment = () => {
        setstat(stat + 1);
    }
    const decrement = () => {
        if (stat === 0) {
            alert("zero value reached can't go beyond ");
        }
        else {
            setstat(stat - 1);
        }
    }

    const submitted = (event)=>{
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={submitted}>
                <h1>{stat}</h1>
                <button onClick={increment}><AddIcon /></button>
                <button onClick={decrement}><RemoveIcon /></button>
            </form>
        </>
    )
};

export default App;
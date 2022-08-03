import React, { useState, useEffect } from 'react';


const App = () => {
    const [count, setcount] = useState(0);
    useEffect(() => {
        if (count > 0) {
            document.title = `Chat(${count})`;
        }
        else {
            document.title = `Chat`;
        }
    }, [count]);
    return (
        <React.Fragment>
            <title></title>
            <button onClick={() => {
                setcount(count + 1);
            }}>Press Me {count}</button>
        </React.Fragment>
    )
};

export default App;
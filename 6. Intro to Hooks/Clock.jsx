import React from 'react';
import { useState } from 'react';

const App = ()=>{
    let date = new Date().toLocaleTimeString();
    const [count,setCount] = useState(date);

    const increment = ()=>{
        date = new Date().toLocaleTimeString()
        setCount(date);
    }
    setInterval(increment,1000);

    return(
        <React.Fragment>
            <h1>{count}</h1>
            
        </React.Fragment>
    )
}
export default App; 

//* same as code below
//* but here we use use setInterval to automatically call the function after 1 sec
//* witthout any clicking of button



///************************************ */
//* To change time every click
// const App = ()=>{
//     let date = new Date().toLocaleTimeString();
//     const [time,setTime] = useState(date);

//     const increment = ()=>{
//         date = new Date().toLocaleTimeString();
//         setCount(date);   
                 // OR
//         setCount(new Date().toLocaleTimeString());
//     }

//     return(
//         <React.Fragment>
//             <h1>{time}</h1>
//             <button onClick={increment}>Click Me !!</button>
//         </React.Fragment>
//     )
// }
///************************************ */
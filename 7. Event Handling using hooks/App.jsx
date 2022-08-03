import React, {useState} from 'react';

const App = ()=>{
    const purple = 'purple';
    const [bg,setBg] = useState(purple);
    const [name,updatedName] = useState('Chandu');
    
const bgChange = ()=>{
    setBg('red');
    updatedName('Mukesh');
};

const bgBack = ()=>{
    setBg('cyan');
    updatedName("Suresh");
};


    return (
        <React.Fragment>
        <div style = {{backgroundColor:bg}}>
        <button onClick = {bgChange} onDoubleClick = {bgBack}>{name}</button>
        </div>
        </React.Fragment>
    );
};


export default App;


// use camelCase while declaring events like onClick onMouseEnter onDoubleClick  
// and don't add () after the function name while calling the function in events 
// use hooks while changing the state with events ...
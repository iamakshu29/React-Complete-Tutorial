import React from 'react';
import { useState } from 'react';

const Accordian = ({ ques, ans }) => {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <div>
                <button onClick={() => { setShow(!show) }}>{show ? "-" : "+"}</button>
                <h1>{ques}</h1>
            </div>
            <div>
                {show && <h2>{ans}</h2>}
            </div>

        </React.Fragment>
    );
}


export default Accordian;


//* After getting the props the common way is using props object as an args then extract the values using dot operator
//* but we can also do the object destructuring for value extraction from props object

//* Now for the hide or show of ans div
//? we can simply do the boolean things that if show && <h2> </h2> are true then it is visible else not   
//TODO {true && true} <- show {false && true} <- hide
//? so to change the state of show we use useState(); and at starting we inititialize show with false;

//* and using onclick we toggle the useState() value with setShow(!show) and also change the icon using ternary operator

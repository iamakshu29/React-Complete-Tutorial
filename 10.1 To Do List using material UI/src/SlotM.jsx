import React from 'react';


const SlotM = (props) => {
    let x = props.icon1;
    let y = props.icon2;
    let z = props.icon3;

    if (x === y && y === z) {
        return (
            <div className='slot_inner'>
                <h1>
                    {props.icon1} {props.icon2} {props.icon3}
                </h1>
                <h1>This is matching</h1>
            </div>
        )
    }
    else{
        return (
            <div className='slot_inner'>
                <h1>
                    {props.icon1} {props.icon2} {props.icon3}
                </h1>
                <h1>They are not matching</h1>
            </div>
        )
    }
}

export default SlotM;
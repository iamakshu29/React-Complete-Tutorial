import React from 'react';

const Input = (props) => {
    return (
        <React.Fragment>
            <input type="text" placeholder={props.place} name={props.Name} onChange={props.func} />
        </React.Fragment>
    )
}

export default Input;


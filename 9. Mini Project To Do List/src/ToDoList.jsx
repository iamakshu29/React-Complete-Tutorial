import React from 'react';

function List(props) {
    return (
        <li>
            <button
                onClick={() => {
                    props.delFunc(props.id)
                }}
            > DEL
            </button>
            {props.notes}
        </li>
    );
}

export default List;

// we can pass a function without args normally using props 

// <Button func = {solve} /> // in App.jsx
// <button onClick = {props.func}> // in custom components file

// but 

// when the func consists of args we need a call back func and in call back func we can pass the function with args

// <Button func = {solve} id={index} /> // in App.jsx
// <button onClick = {()=>{props.func(props.id)}}> // in custom components file


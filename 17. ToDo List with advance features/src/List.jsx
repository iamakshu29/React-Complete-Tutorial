import React from 'react';


const List = (props) => {

    return (
        <React.Fragment>
            <ul>
                <li>
                    {props.items}
                    <button onClick={() => { props.fun(props.id) }}>Delete</button>
                    <button onClick={() => { props.funTwo(props.id) }}>Edit</button>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default List


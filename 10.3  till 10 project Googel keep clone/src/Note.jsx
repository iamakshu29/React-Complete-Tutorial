import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
    const delNote = () => {
        props.delFunc(props.id);
    }; 
    return (
        <>
            <div className='lists'>
            <ul>
            <li>
            <h3>{props.title}</h3>
            <h3>{props.content}</h3>
            </li>
            <Button color="primary"  onClick={delNote} ><DeleteIcon /></Button>
            </ul>
            </div>
        </>
    );
}

export default Note;

// As we know props is an object so we can do object destructuring and write directly without props.

// const Note = ({delFunc,id,title,content}) => {
//     const delNote = () => {
//         delFunc(id);
//     }; 
//     return (
//         <>
//             <div className='lists'>
//             <ul>
//             <li>
//             <h3>{title}</h3>
//             <h3>{content}</h3>
//             </li>
//             <Button color="primary"  onClick={delNote} ><DeleteIcon /></Button>
//             </ul>
//             </div>
//         </>
//     );
// }
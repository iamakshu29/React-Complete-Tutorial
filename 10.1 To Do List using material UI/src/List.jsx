import React, {useState} from 'react';
import RemoveIcon from '@material-ui/icons/Remove';

function List(props) {
    const [line,setLine] = useState(false);
    const cutIt = ()=>{
        setLine(true);
    }
    return (
        <div>
            <span onClick={cutIt}>
                <RemoveIcon />
            </span>
            <li style={{ textDecoration : line ? 'line-through' : 'none',listStyleType:'none'}}>
                {props.notes}
            </li>
        </div>
    );
}

export default List;
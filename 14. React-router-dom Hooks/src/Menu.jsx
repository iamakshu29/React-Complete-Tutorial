import React from 'react';
import { NavLink} from 'react-router-dom';
const Menu = () => {
    return (
        <React.Fragment>
            <h3>Using NavLink tag</h3>
            <br></br>
            <NavLink to='/'>About US</NavLink>
            <NavLink to='/contact'>Contact US</NavLink>
            <NavLink to='/contact/name'>Name</NavLink>
            <NavLink to='/user/default/def_id'>User</NavLink>
        </React.Fragment>
    )
}

export default Menu;



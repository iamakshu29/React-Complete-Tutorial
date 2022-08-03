import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <React.Fragment>
           <div className='nav'>
           <NavLink exact to='/'>All</NavLink>
            <NavLink exact to='/lunch'>Lunch</NavLink>
            <NavLink exact to='/dinner'>Dinner</NavLink>
            <NavLink exact to='/sweets'>Sweets</NavLink>
           </div>
        </React.Fragment>
    );
}

export default Menu;
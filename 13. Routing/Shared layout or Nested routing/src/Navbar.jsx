import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <NavLink to='/about'>About US</NavLink><br />
            <NavLink to='/contact'>Contact US</NavLink><br />
        </React.Fragment>
    )
}

export default Navbar;
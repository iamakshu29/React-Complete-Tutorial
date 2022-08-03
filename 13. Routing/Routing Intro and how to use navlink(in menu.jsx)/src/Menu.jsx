import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Menu = () => {
    return (
        <React.Fragment>
            <h2>Using NavLink tag</h2>
            <br></br>
            <NavLink to='/'>About US</NavLink>
            <NavLink to='/contact'>Contact US</NavLink>
            <NavLink to='/contact/name'>Name</NavLink>
            <br></br>
            <br></br>
            <br></br>
            <h2>Using Link tag</h2>
            <br></br>
            <Link to='/'>About US</Link>
            <Link to='/contact'>Contact US</Link>
            <Link to='/contact/name'>Name</Link>
            <br></br>
            <br></br>
            <br></br>
            <h2>Using Anchor tag</h2>
            <br></br>
            <a href="/">About Us </a>
            <a href="/contact">Contact Us</a>
            <a href="/contact/name">Name</a>
        </React.Fragment>
    )
}

export default Menu;




// In this tutorial we learn how to make a navbar to move through the components

//There are three Methods to do this
//* 1. Basic <a> tag with href =>  the cons of using anchor tag is when we move from 1 comp. to another
//* then it reloads the page .
//TODO But the only reason we use react-router-dom is to avoid reloading..

// so we use Method 2

//* 2. importing Link from from router-dom => instead of anchor tag we use "Link" tag or component
//* and instead of href we use "to" attribute for url
//* the cons in this we can't say that which link is active without seeing the url above


// so we use Method 3

//*3 importing NavLink from from router-dom => instead of anchor and Link tag we use "NavLink" tag or component
//* NavLink automatically added a class .active when we click on it which we can style in css and change the color of active link

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Name from './Name';
import Error from './Error';
import Menu from './Menu';


const App = () => {

    return (
        <React.Fragment>
            <Menu />

            <Routes>
//* if there are props add like this
                <Route  path='/' element={<About about="About" dir="side" />} />
                <Route  path='contact' element={<Contact contact="contact" dir="side" />} />

//* else write normally just pass the component in {}
                <Route path='contact/Name' element={<Name />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </React.Fragment>
    );
};

export default App;

//* Main Purpose of react-router-dom is to display multiple components and to 
//* make the shifting of one component to another component reload free or without any reload


//* to create routes to display multiple web components we use react-router-dom

//* 1. first we install react-router-dom using npm
//* 2. we import BrowserRouter in main file ie index.js file
//* 3. then we import Routes and route where we want to write our components

// now react router contains 3 parts that are mentioned in point 2 and 3

// now the component we need to render as a route should be inside the BrowserRouter
// in index.js <App /> component contain all component so it is inside the browser component

//* now in Routes component we write the Route component
// Route component contain 2 attributes path (the url we need to show)
// and the element (the component we need to show) is written


//* in case of error page any path except the listed path will be an error path 
// thats why we do not include the url and just write the component we want to
// show if user entered the wrong path


// <> </> gives error so from now in we use <React.Fragment> after instaling router-dom
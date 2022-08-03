import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Name from './Name';
import Error from './Error';
import Menu from './Menu';
import User from './User';

const App = () => {

    return (
        <React.Fragment>
            <Menu />
                <Routes>
                    <Route path='/' element={<About  about = "About" dir = "side" />} />
                    <Route path='/contact' element={<Contact  contact = "contact" dir = "side" />} />
                    <Route path='/contact/name' element={<Name />} />
                    <Route path = '/user/:fname/:id' element={()=><User />} />
                    <Route path="*" element={<Error />} />
                    <Route path = "*" element={<Navigate to="/" replace />} />
                        {/* OR */}
                    {/* <Redirect to="/" /> */}
                </Routes>
        </React.Fragment>
    );
};

export default App;

// In this tutorial we are learning about useParams Hooks
// useParams ie useParameters 
// they are used when we we need to show data inside a component which changes as we make change in url
//*  just write  /:params  as we done in user 

//! after steps is in User.jsx


// after all the hooks here is a new module for redirecting to particular page 
// first we have to import it from router-dom 
// this module redirect to the location written in to attr.  
//* this feature is used when you don't want an error page and you redirect any user to particular when the url is not matched with any of the pages 
//* instead of showing the error page when you type the wrong url , it redirects you to home page as the path in to attr. is for home

//* Important
// In v6 version of react-router dom Navigate replaces Redirect now there is not any Keyword named Redirect in react-router-dom
// it navigate now
//* in simple ways we can say that line 23 replace to 21

//* NOTE
// don't use error page and navigate in same project as the path of both are same so it will go to path that comes first
// in upper code error is first so it doesnot navigate it takes u to error page 
// line 20 and line 21 
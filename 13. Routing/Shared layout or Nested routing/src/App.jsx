import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const App = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About about="About" dir="side" />} />
          <Route path='contact' element={<Contact contact="Contact" dir="side" />}></Route>
          <Route path='*' element={<h1>Error 404 page</h1>}></Route>
        </Route>
      </Routes>

    </React.Fragment>
  );
};

export default App;

// for nested routing just wrap around all the Route in a single route
// like we wrap contact, about and error in home route 

// it means whatever is in home is rendered in all other components tooo
// so we can render those pages which we want to display on every page like navbar footer etc

// just add Outlet component along with other comp u want to show
// Outlet contains all the wrapped component in which you want to show navbar and footer etc

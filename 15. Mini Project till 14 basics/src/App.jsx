import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Menu from './Menu';
import Footer from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <Menu />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/service' element={<Service />} />
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
}

export default App;
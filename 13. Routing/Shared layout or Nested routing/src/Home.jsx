import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Home;

// import Outlet as Outlet conatins all the comp wrapped around a single one
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
// this is used to import js from bootstrap but it is not wotking thatsy the navbar button is not working
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />,
    </BrowserRouter>,
    document.getElementById('root')
);
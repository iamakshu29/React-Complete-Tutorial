import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
// bootstrap

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
);


// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );

//* the NavLink is Not working in StrictMode thats why for using NavLink or Link we have to remove the Strict Mode



import React from 'react';

const Footer = ()=>{
    const year =  new Date().getFullYear();
    return (
        <p>Copyright &#169; {year} </p>
    );
}

 export default Footer;
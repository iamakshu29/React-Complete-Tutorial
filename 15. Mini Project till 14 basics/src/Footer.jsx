import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer className="w-100 bg-light text-center">
                <p className='foot'>&#169; {date} Akshat Technical All Right Reserved | Terms and Condition</p>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
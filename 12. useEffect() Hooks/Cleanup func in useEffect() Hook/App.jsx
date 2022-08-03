import React, { useState, useEffect } from 'react';


const App = () => {

    const [size, setSize] = useState(window.screen.width);

    const displayWidth = () => {
        const width = window.innerWidth;
        setSize(width);
    }

    useEffect(() => {
        window.addEventListener("resize", displayWidth);

        return () => {
            window.removeEventListener("resize", displayWidth);
        }
    })


    return (
        <React.Fragment>
            <h1>The size of window is</h1>
            <h1>{size}</h1>
        </React.Fragment>
    )
};

export default App;

// Complete Syntax
// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

//* Main use of second callback function or cleaner function is to instanly call secon after execution of first 
//* Note (See first and second in syntax of useEffect());


//* go to developer tools -> element -> eventListener -> resize
// there you see multiple commands are produced when we change the resize the window
// so because of that serevr may crash or get slow

//* To stop this
// we have to use the complete suyntax of useEffect() hook as
// it contains a second callBack function also known as cleaner function

// the second callback function gets called instantly after the first callback funct
// and here it is udes to remove the added EventListener
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


//In this tutorial we are learning about react component they are nothing but a function which can be used again and again

// to make the component we have to make a different file there is a rule
//* 1. file name must be capitalize and 2. extension should be .jsx (which will help react to get the data fastly)
// for example Heading.jsx and Para.jsx

//? then we have to define a function with the same name as file name..
// for example function Heading(){return}

//? then we have to export our module like we do in node (module.exports)
// for example export default Heading;

//? As this is the latest version that's why we use the different syntax for export
// export default <function name>
//* why default?
//TODO  we use default because there is only one function or one component is there..

// then we use to import the component into our main file ie index.js file
// then we can use the component anywhere and any number of times like we can call the function multiple time just making the tagname of that particular component
// we can make a self closing tag or a normal tag or both
//? < /> OR <> </>


// ************************************************************************************

//? Now the main file ie index.js file needs to be simple and clean
// thats why we did not import all the components one by one 
// we import all the components in a seperate file name App.jsx
// that's why we move Heading.jsx Para.jsx and List.jsx to App.jsx

//? App.jsx contain all the components in a single file then if we can import all components at once by importing only App.jsx 
// else we import the Components one by one..
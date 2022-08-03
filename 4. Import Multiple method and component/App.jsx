import React from 'react';

// * 1st Method (More preferable but a little but lengthy)

// import name, { college,school,Heading,movie,series,Para } from './Heading';
// ! always try to import variables/methods serial wise


// function App() {
//     return (
//         <>
//         <h3> {name}</h3>
//         <h3> {college}</h3>
//         <h3> {school}</h3>
//         <Heading />
//         <h3> {movie()}</h3>
//         <h3> {series()}</h3>
//         <Para />
//         </>
//     );
// }


// * 2nd Methods ( can be confusing but short and not preferred too)

// import * as kuch from './Heading';

// function App(){
//     return (
//                 <>
//                 <h3>name</h3>
//                 <h3> {kuch.movie}</h3>
//                 <kuch.Heading />
//                 <h3> {kuch.movie()}</h3>
//                 <h3> {kuch.series()}</h3>
//                 <kuch.Para />
//                 </>
//             );
// }

// export default App;

//! Important Note :-
// we can use components which return tag like h1 p .... like this too
// but I don't know it is a good practice or not
// so don't use the components like below which returns a tag 
// for example in file Head.jsx
//Heading() and para() return tag 

// False Practice I think they are but they give output :- 
//here we take para() as example from Heading.jsx file
//? <p>{Para()}</p>
//? <p><Para /></p>
//? {Para()}

// always use that type of component like this
//? <Para />
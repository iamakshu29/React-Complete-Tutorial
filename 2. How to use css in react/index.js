//TODO **********************************************************************  video 15    *********************************************************************************

import React from 'react';
import ReactDOM from 'react-dom';

//* importing file index.css  for EXTERNAL CSS

import './index.css';


// const img = 'dummy-imaage-2.png';
// const link = 'https://www.instagram.com';

// ReactDOM.render(
//     <>
//         <h1 className='heading' >We are using the attributes here...</h1>
//         <a href="https://www.fb.com" target="_blank" rel="noreferrer" > Enter to facebook </a>
//         <div className='image_div'>
//             <img src="imaage.png" alt='dummy-imaage-1' />
//             <img src={img} alt='dummy-imaage-2' />
//             <a href={link} target="_blank" rel="noreferrer" > <img src="imaaage.png" alt='dummy-imaage-3' /> </a>
//         </div>
//     </>,
//     document.getElementById('root')
// );

//* as react is a platform in which both js and html like JSX used together
//! that why we can't use class keyword in place of this we use ---> className 
// because class is reserve word in react.. Like in js we have class and objects 



//TODO **********************************************************************  video 17   *********************************************************************************

//* How to use INTERNAL CSS

//* for using css internally we have to use JS objects...

//? all the kebab-case element present in css will convert into camelCase 
//TODO (kabab-case) text-align ---> (camelCAse) textAlign

//? the elements in css and its value will represent as key value pair of an object shown below :-

// const heading = {
//     color: 'pink',
//     textAlign: 'center',
//     fontSize: '50px',
//     textShadow: '0px 2px 4px black',
//     margin: '70px 0',
//     fontFamily: '"Courier New", Courier, monospace',
//     textTransform: 'capitalize'
// }

// const unorderedList = {
//     margin: '0 20px',
//     listStyleType: 'none',
// }

// const list = {
//     display: 'inline-block',
//     margin: '0 20px'
// }

//* as we know to use JS in JSX, we need pair of curly brackets {} around the expression
//* we use the same here to include the object, which contain the css properties...

// ReactDOM.render(
//     <>
//         <h1 style={heading}>Hello what are you doing !!!</h1>
//         <ul style={unorderedList}>
//             <li style={list}>Apple</li>
//             <li style={list}>Mango</li>
//             <li style={list}>Banana</li>
//             <li style={list}>Grapes</li>
//         </ul>
//     </>,
//     document.getElementById('root')
// );


//* Using INLINE CSS

//* using inline css is same as internal css 
//? the only diff is we have to write all the properties in JSX elements as an object that why we use two pair of {{}} 
//* First {} pair :- for writing JS expression in JSX
//* Second {} pair :- for wrting css elements as an object 



// ReactDOM.render(
//     <>
//         <h1 style={{
//             color: 'blue', textAlign: 'center', fontSize: '50px',
//             textShadow: '0px 2px 8px green', margin: '70px 0',
//             fontFamily: '"Courier New", Courier, monospace',
//             textTransform: 'upperCase'
//         }}>
//         Above ReactDOM.render() files are not rendering, to render them comment this one.. </h1>
//     </>,
//     document.getElementById('root')
// );


//* Note :-
//! In react, Inline CSS has great importance we will see how in next mini project
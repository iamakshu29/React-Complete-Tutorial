//TODO  PLAYLIST LINK :-  https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ


//TODO **********************************************************************  video 6    *********************************************************************************

/* we don't use require module syntax because 
* 1. it is used in node.js
* 2. It is old fashion 

In new version ie from ES5 we use the import syntax 
earlier we have to write the old require syntax because our browser can't understand the modern js

* but there is a compiler called Babel which is automatically installed along with react which can convert the modern js in to browser readable js

*for example
 if we write the fat arrow function, babel compiler convert this into normal function and similarly const,let to var 
 so because of this we can now use the modern js syntax like import .
*/

// const React = require('react');
import React from 'react';
// const ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

//* reactDOM.render function takes 3 paramater(what to show, where to show and callback function());
//? what to show is look like html syntax called JSX
//? and In where to show we use the div present in index.html in public folder and with the help of DOM we show the content on browser..

//? we need react module to use JSX or what to show part
//? we need react-dom module for DOM manipulation or where to show part 

//* 1.
ReactDOM.render(<h1> hello world!! </h1>, document.getElementById('root'));


//TODO **********************************************************************  video 7    *********************************************************************************

//* 2.
//*  ReactDOM.render(React.createElement('h1',null,'helloo world!!'),document.getElementById('root'));
//?  The upper code  is the actual form of code present in pt.1 and beacause of babel we can write shorter code..


//* 3.
//* this is how we write the same in js
// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World';
// document.getElementById('root').appendChild(h1);




//TODO **********************************************************************  video 8    *********************************************************************************

//*                       How to render Multiple elements in React...

// Render method takes one single JSX element, and to write multiple JSX elemtent, we need to wrap the elements to one
// that's why we wrap both multiple elements to a div,  now we can write any number of elements inside div

//* 1. Older version syntax
// ReactDOM.render(
// <div>
//   <h1> hello world!! </h1>
//   <p>I am from GL Bajaj </p> 
// </div>,
// document.getElementById('root'));



// But in react v16 and above it is possible for render() method, to return an array of elements
// like ['hello','hi'];
//* 2. New version syntax
// ReactDOM.render(
//   [
//     <h1> hello world!! </h1>,
//     <p>I am from GL Bajaj Institute </p> 
//   ],
//   document.getElementById('root'));

//TODO **********************************************************************  video 9    *********************************************************************************

//* But there is another fast version to write multiple elements which is known as React.Fragement
// if we use div as a wrapping element then that extra div is shown in DOM which may create problem 
// while using grid or flex and it is also time consuming.

//  That's we we use <react.fragment> as it consumes less memory, faster amd time efficient 
// <React.Fragment>...</React.Fragment> is best method.

//* 3. Newer and Better version syntax part 1

// ReactDOM.render(
//     <React.Fragment>
//         <h1> hello world!! </h1>
//         <p>I am from GL Bajaj Institute </p>
//     </React.Fragment>,
//     document.getElementById('root'));


//* More simpler version of upper code just use <> </> its known as syntactic sugar form

// ReactDOM.render(
//     <>
//         <h1> hello world!! </h1>
//         <p>I am from GL Bajaj Institute </p>
//     </>,
//     document.getElementById('root'));




//TODO **********************************************************************  video 11, 12    *********************************************************************************


//* How to use JSX Expressions

//* In JSX we put the JS expression or the variable in between {} 

// AND

//* How to use TEMPLATE LITERALS ie ` ` backticks



// const fname = "Akshat";
// const lname = "Verma";
// const brand = "Apple";
// const choice = "Macbook";
// const randy = Math.floor((Math.random())*6)+1;

//*  Can also use date method

// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//   <h1>Hello my name is {fname}. </h1>
//   <h1>hello my full name is {fname + " " + lname}. </h1>
//   <p>My lucky number is {5+2} and {Math.floor((Math.random())*15)+11} </p>
//   <p>We can aslo write it as {randy}. </p>

//* template literals

//   <h1> hello my full name is {`${fname} ${lname}`}. </h1>
                //* OR
//   <h1> {`hello my full name is ${fname} ${lname}`.} </h1>

//   <p>{` I like ${brand} ${choice}`}</p>
//   <p>{`Today's date is ${currDate}`}</p>
//   <p>{`Current time is ${currTime}`}</p>
//   </>,
//   document.getElementById('root')
// );

//* we can only use expression in b/w {}

//! we can't use statements like loop, if else,loops... etc in b/w {}


//TODO **********************************************************************  video 13    *********************************************************************************

//* JSX attributes in React

//* Properties of JSX element is called JSX attribute like in anchor tag href and target are JSX attributes 
//? for example : <a href = "", target = "" /> 
// we cant define them as html attribute bcoz they look like html but in real they are JSX elements


// const img = 'dummy-imaage-2.png';
// const link = 'https://www.instagram.com';

// ReactDOM.render(
//     <>
//* 1st Way
//         <a href="https://www.fb.com" target="_blank" rel="noreferrer" > Enter to facebook </a>
//         <img src="imaage.png" alt='dummy-imaage-1' />

//* 2nd Way
//         <img src={img} alt='dummy-imaage-2' />
//         <a href={link} target="_blank" rel="noreferrer" > <img src="imaaage.png" alt='dummy-imaage-3' /> </a>
//     </>,
//     document.getElementById('root')
// );

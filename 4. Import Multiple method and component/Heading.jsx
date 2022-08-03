import React from 'react';

let name = 'Akshat Verma';

let college = 'G L Bajaj Institute of Technology and Management';

let school = 'S.D. Public School';

function Heading(){
    return <h1> Hello From the My side...</h1>;
}

function movie(){
    let movie = 'Ice-Road';
    return movie;
}

function series(){
    let series = 'Game Of Thrones';
    return series;
}

function Para(){
    return <p>This is the tutorial on how to import multiple function variables and components</p>;
}

// first will be  default
export default name;

// after that all other will be in {}
export {college,school,Heading,movie,series,Para};



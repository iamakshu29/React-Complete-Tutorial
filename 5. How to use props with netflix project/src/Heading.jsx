import React from 'react';

function Heading(){
    return <h1>Here we have the calculator app..</h1>;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return Math.abs(a-b);
}

function div(a,b){
    let c = a/b;
    c = c.toPrecision(2);
    return c;
}

function mult(a,b){
    return a*b;
}

export default Heading;

export {sum,sub,div,mult};



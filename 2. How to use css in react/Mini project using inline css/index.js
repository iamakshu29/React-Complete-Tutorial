import React from 'react';
import ReactDOM from 'react-dom';

let date = new Date(2021,5,5,15);
date = date.getHours();

let greet = "";

const cssStyle = {};

if(date >= 1 && date < 12)
{
    greet = 'Good Morning';
    cssStyle.color = 'green';
    cssStyle.textTransform = 'lowerCase';
}
else if (date >= 12 & date < 16) {
    greet = 'Good Afternoon';
    cssStyle.color = 'yellow';
    cssStyle.textTransform = 'upperCase';
}
else if (date >= 16 & date < 20) {
    greet = 'Good Evening';
    cssStyle.color = 'orange';
    cssStyle.textTransform = 'Capitalize';
}
else{
    greet = 'Good Night';
    cssStyle.color = 'black';
}


ReactDOM.render(
    <>
        <h1 style={{color:'orange'}}>Hello sir,<span style={cssStyle}>{greet}</span></h1>
    </>,
    document.getElementById('root')
);




//*Note :-
// with this mini project we can see that why inline css is so important in react
// because we can declare it change it like we do in if-else condition
// because here css-style is a key-value pair in object 
// and we can add the value in objects we can change the object values....
// we can add and change as many values we want
// ! Remember while adding new key-value pair we use = instead of : like we did in if-else loops
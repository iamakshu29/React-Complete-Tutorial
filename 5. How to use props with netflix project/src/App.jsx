import React from 'react';
import Cards from './Cards';
import Seriesdata from './Seriesdata';


function App() {
    return (
        <>
            <h1 className='heading'> List of Top 5 Series in 2020.. </h1>

            <div className='container'>

//* 1st Method
                <Cards
                    imgsrc='images/sex_ed.jpg'
                    title='A Netflix Original Series'
                    sname='Sex Education'
                    slink='https://www.netflix.com/in/title/80197526'
                    clName='netflix'
                />

//* 2nd Method                

    
                <Cards
                    imgsrc={Seriesdata[1].imgsrc}
                    title={Seriesdata[1].title}
                    sname={Seriesdata[1].sname}
                    slink={Seriesdata[1].slink}
                    clName={Seriesdata[1].clName}
                />
                <Cards
                    imgsrc={Seriesdata[2].imgsrc}
                    title={Seriesdata[2].title}
                    sname={Seriesdata[2].sname}
                    slink={Seriesdata[2].slink}
                    clName={Seriesdata[2].clName}
                />

//* 3rd Method                

                {
                    Seriesdata.map((value) => {
                        return (
                            <Cards
                                key={value.id}
                                imgsrc={value.imgsrc}
                                title={value.title}
                                sname={value.sname}
                                slink={value.slink}
                                clName={value.clName}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default App;



//* About PROPS
//? simply we can say that Props/properties are the custom attributes made by user in user defined tags

// * Like we can make our own tags in React which are known as components and can be use again and again
// * then mostly all tags have attribute either it is className,id in h1,p tags or type, placeholder in input tags
// * it means we can make our custom attributes for components too . So in react that custom attributes are knows as 'props' and props act as an object and the attributes inside the props objects can be 
// * accessed by dot(.) operator ie props.<attrName> where the component is made ie in Cards.jsx file


//TODO   here slink, sname, title, imgsrc are act as custom attributes/props for Cards component so that it can be used again and again only by changing the content with the help of these props



// ! clname is the cutom attribute to add class for differnt card its working fine if there is only one class but if there is more than 1 one class with this custom class clname won't work
// ! can't find the reason to this as well as can't find the solution to use more than one class when using giving the name to class using props

//* <h3 className= {props.clName} > {props.sname} </h3> <-- This works fine
//* <h3 className= '{props.clName} category'> {props.sname} </h3> <-- This does not

//* 1st method
// this does not need to get the data from Sereiesdata.jsx
// we simply insert the value to props here and in Cards.jsx they just need to extract it using props.propName

//* 2nd METHOD 

//*  To Make the code more simple we use array of object
// In a diff file ie (Seriesdata.jsx) we make an array of object and fill all details in array
// then we call the value to our custom attribute using . operator  arrayName[0].<keyName>


// ! Important

// the first card is done by normal custom attribute...
// the other three are done by using array of objects..

//* 3rd Method

//* To make the code more shorter and quicker we use map function of array 
//! React use map function and only in rare cases, it uses loop 
//* Basically map function works like a loop as it prints all tha values of an array

// if there is simple array a = ['hi','bye','oyo'];
// const newArr = currArr.map(function(value,index,array){
    // console.log(value,index,array);
// })

// if there is an array of object like the Seriesdata
// const newArr = currArr.map(function(value,index,array){
    // console.log(value.<keyname>,index,array);
// })

//* while using map function a uniques must be added so that in future we get the card by choosing the uniques key 
//* and it also gives the warning if we don't use a uniques key

//* add id in array 
//* make a attribute with name key and pass that id ie key:{value.id}   attribute name should be same ie 'key'

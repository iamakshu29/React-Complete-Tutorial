import React, {useState, useEffect} from 'react';


const App = () => {
    let counting = 0;
    const [count, setcount] = useState(counting);
    const [counts, setcounts] = useState(counting);
    useEffect(() => {
        alert('hi');
        console.log('hi');
        },[count]);

    const increment = ()=>{
        setcount(count+1);   
    }
    const incrementt = ()=>{
        setcounts(counts+1);
    }
    return (

        <>
        <h1>{count}</h1>
        <button onClick={increment}>click me</button>
        <br></br>
        <h1>{counts}</h1>
        <button onClick={incrementt}>click me</button>
        </>
    )
};

export default App;




//* Here we understand what useEffect Hook is
// by using this hook, you tell react that your component needs to do something after render.
// like invokes an alert etc

//* Why useEffect hook is used (Accor... to Me)
// As we know that the onclick method will override the previous commands and only follow the most recent ones
// ie we use multiple functions like

//? For Example :-

// const[num,setNum] = useState(0);
// const increment = ()=>{
//     setNum(num+1);
// }
// const showAlert = ()=>{
//     alert("hello how are you !!!");
// }

// <h1>{num}</h1>
// <button onClick={increment , showAlert}>Click Me</button>
    //TODO the two function with single onClick also show warning :-
    //! Unexpected use of comma operator (compiled with warnings)


// As we can see that the onClick() has two function but it does not invokes both
// it only invokes the latest one  
// we can't use addEventListener() method here too
// so to overcome this or find a solution of this problem we use useEffect() hook
// or We can say that this is one of the problem that enables us to use useEffect() hook
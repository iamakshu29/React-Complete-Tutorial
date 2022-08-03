import React from 'react';
import { useParams,useLocation, useNavigate} from 'react-router-dom';
const User = () => {
    const { fname, id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <h1>Hello welcome {fname} having id {id} to this page.. This is done with help of useParams() hook </h1>
            <h2>My actual location is <span>{location.pathname}</span>...This is done with help of useLocation() hook</h2>

{/* we can combine location and navigate :- comment out any 1 and see result */}

            {/* this line will act as goback and take one step backward in history after click the button  */}
            {/* {location.pathname === '/user/akshat/21' ? (<button onClick={() => navigate(-1)}>Go Back</button>) : null} */}
                {/* or */}
            {/* {location.pathname === '/user/akshat/21' ? (<button onClick={() => navigate("../contact/name")}>Click ME</button>) : null} */}

{/* or we can do simply */}
            <button onClick={()=>{navigate('/contact')}}>Go to contact</button>
            
        </React.Fragment>
    )
}


export default User;



//* Hook 1 useParams()
// after declaring the params name now we have to call it here
// so we have to importing useParams hooks from react-router-dom

// then we have to call the hooks along with the name
//* NOTE the name should be same as params name we declared in User path
// {} are used so that we call multiple params ....after calling we need to use them in components in tags to get displayed 

//************************************************************************************************************************************ */
//* Hook 2 uselocation()
// Now here we understand how to use useLocation Hook

// to get the url address or location 
// 1. just import the useLocation hook and
// 2. assign the value to variable  
// 3. and display using variable.pathname 
// because uselocation() hook return an object so we have to get the value which is inside the pathname key

// we only need {} in useParams() at assign time we don't because params may take multiple args
// whereas we don't need {} in useLocation() because there is only one single location at a time

//to show a button we have to set a condition but that should use ternary operator ie ? :
// not if else (it gives error dunno why)

//************************************************************************************************************************************ */
//* Hook 3 useHistory() (v5 of rect-router-dom) now changed to useNavigate() in react-router-dom v6
// Now here we understand how to use useLocation Hook

//to navigate through pages ie to push, goback, home we use useNavigate() Hook
// useNavigate() Hook returns a object that contain the value of last url, home url and the pathname also which was available in useLocation() hook to
// now which .pathname we have to use
// we have to use only the location hook for the url path because the path in history hook is mutable ie it can be changed as we visit the tabs
// to goback use navigate(-1);

//* The navigate function has two signatures:

// Either pass a To value  with an optional second { replace, state } arg //* :- navigate('/contact',{replace:true})
//* OR
// if you want to go in the history stack. For example, //* navigate(-1) is equivalent to hitting the back button.

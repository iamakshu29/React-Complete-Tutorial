import React, { useState } from 'react';

const Navbar = () => {
    const [convert, setconvert] = useState(false);
    const showBar = () => {
        setconvert(!convert);
    }

    return (
        <React.Fragment>
            <div>
                <button onClick={showBar}><i class="fas fa-bars"></i></button>
            </div>

            <nav>
                <div className="title">
                    <h1>Akshat Verma</h1>
                </div>
                <div className={convert ? "barTwo main-link" : "bar main-link"}>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>login</li>
                    </ul>
                </div>
                <div className={convert ? "barTwo icon-link" : "bar icon-link"}>
                    <ul>
                        <li className="facebook"><i class="fab fa-facebook-square"></i></li>
                        <li className='instagram'><i class="fab fa-instagram-square"></i></li>
                        <li className="facebook"><i class="fab fa-twitter-square"></i></li>
                        <li className="youtube"><i class="fab fa-pinterest-square"></i></li>
                    </ul>
                </div>
            </nav>


        </React.Fragment>
    )
}

export default Navbar;


//* Things to understand
//  first we make a simple navbar then to add the functionality of click to display navbar when width is less than 1000px
//  we use useState hook coz we need to change the state from display none to block
//  if button is click the class having the display block property is added (in this case the class is barTwo)
//  which show the navbar 
//  if button is clicked again the class having the property none is added(here it is class bar)
//  which again hides the navbar
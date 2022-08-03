import React from 'react';

function Cards(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src= {props.imgsrc} alt='myPic' className='card__img' width='200px' height='200px' />
                    <div className='card__info'>
                        <span className='card__category'> {props.title} </span>
                        <h3 className= {props.clName}> {props.sname} </h3>
                        <a href= {props.slink} target='_blank' rel="noreferrer">
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cards;

// this is a card component just import this and we can use it multiple times 
//* and arguement(props) in fucntion Cards allow us to insert the props' values where needed or where we want it to stored
//* props acts as an object thats why we need dot(.) operator to extract values like props.sname
//* using {} as we r using JS in JSX 
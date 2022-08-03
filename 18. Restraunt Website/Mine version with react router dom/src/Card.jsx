import React from 'react';

const Card = (props) => {
    return (
        <React.Fragment>
                <div className="content">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={props.img} className="card-img-top" alt="dish" width='150px' height='200px' />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="btn btn-primary">Price: {props.price}Rs</a>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default Card;


import React from 'react';
import CardData from './CardData';

const Service = () => {
    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                CardData.map((val, index) => {
                                    return (
                                        <div key={index} className="col-md-4 col-12 mx-auto">
                                            <div className="card">
                                                <img src={val.image} class="card-img-top" alt="any" height='300px' width='250px' />
                                                <div class="card-body">
                                                    <h5 class="card-title">{val.title}</h5>
                                                    <p class="card-text">{val.desc}</p>
                                                    <a href={val.link} class="btn btn-primary" target='_blank'>Check Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Service;



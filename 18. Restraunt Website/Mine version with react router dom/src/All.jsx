import React from 'react'
import Card from './Card';
import Dishdata from './Dishdata';

const All = () => {
    return (
        <React.Fragment>
            {
                Dishdata.map((value, index) => {
                    return (
                            <Card
                                key={index}
                                price={value.price}
                                title={value.title}
                                img={value.image}
                                desc={value.aboutDish}
                            />
                    );
                })
            }
        </React.Fragment>
    );
}

export default All;


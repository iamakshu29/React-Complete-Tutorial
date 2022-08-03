import React from 'react'
import Card from './Card';
import Dishdata from './Dishdata';

const Lunch = () => {
    return (
        <React.Fragment>
            {
                Dishdata.map((value) => {
                    return (
                        value.meal === 'Lunch' ?
                            <Card
                                price={value.price}
                                title={value.title}
                                img={value.image}
                                desc={value.aboutDish}
                            />
                            :
                            null
                    );
                })
            }
        </React.Fragment>
    );
}

export default Lunch;



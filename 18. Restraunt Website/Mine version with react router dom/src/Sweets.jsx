import React from 'react';
import Card from './Card';
import Dishdata from './Dishdata';

const Sweets = () => {
    return (
        <React.Fragment>
            {
                Dishdata.map((value) => {
                    return (
                        value.meal === 'Sweets' ?
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
export default Sweets;

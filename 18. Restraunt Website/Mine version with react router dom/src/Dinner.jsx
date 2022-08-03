import React from 'react'
import Card from './Card';
import Dishdata from './Dishdata';

const Dinner = () => {
    return (
        <React.Fragment>
            {
                Dishdata.map((value) => {
                    return (
                        value.meal === 'Dinner' ?
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

export default Dinner;



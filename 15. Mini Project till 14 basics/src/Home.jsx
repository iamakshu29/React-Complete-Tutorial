import React from 'react';
import Common from './Common';
import web from '../src/images/img2.svg';

const Home = () => {
    let data = 'Grow Your Business With';
    let data_two = 'Akshat Technical';
    let data_three = 'We are a team of talented developer making websites..';
    let data_four = 'Get Started';
    return (
        <React.Fragment>
            <Common content={data} title={data_two} innerContent={data_three} imgsrc={web}  visit='/about' btn_name={data_four} />
        </React.Fragment>
    )
}

export default Home;
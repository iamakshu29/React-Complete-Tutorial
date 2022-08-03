import React from 'react';
import Common from './Common';
import web from '../src/images/hero-img.png';

const About = ()=>{
    let data = 'Welcome to About Page of';
    let data_two = 'Akshat Technical';
    let data_three = 'We are a team of talented developer making websites..';
    let data_four = 'Contact Now';
    return(
        <React.Fragment>
            <Common content = {data} title = {data_two} innerContent  = {data_three} imgsrc={web} visit='/contact' btn_name={data_four} />
        </React.Fragment>
    )
}

export default About;
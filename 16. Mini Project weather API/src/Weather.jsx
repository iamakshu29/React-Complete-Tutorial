import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Weather = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState('');


    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b830b401baa5fef68028c64cbe254e83`);
            const apiData = await response.json();
            setcity(apiData.main);
        };
        getData();
    }, [search]);

    const input = (event) => {
        const value = event.target.value;
        setsearch(value);
    }


    return (
        <React.Fragment>
            <input type='search' placeholder='search for city' onChange={input} />
            {!city ? (<p>no data </p>) : (
                <div>
                    <h1>{city.name}</h1>
                    <h1>{city.temp}</h1>
                </div>
            )
            }

        </React.Fragment>
    );
}

export default Weather;

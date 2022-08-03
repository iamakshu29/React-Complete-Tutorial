import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';

const ApiData = () => {
    const [data, setData] = useState([])
    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise);
    }
    
    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value,index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.state}</td>
                                    <td>{value.confirmed}</td>
                                    <td>{value.recovered}</td>
                                    <td>{value.deaths}</td>
                                    <td>{value.active}</td>
                                    <td>{value.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ApiData;
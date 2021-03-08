import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}/>)
            }
        </div>
    );
};

export default Home;
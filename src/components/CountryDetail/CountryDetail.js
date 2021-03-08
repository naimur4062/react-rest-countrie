import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryCode} = useParams();
    const [country, setCountry] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
        fetch(url)
        .then(res =>  res.json())
        .then(data => setCountry(data))
    },[])
    console.log(countryCode)
    return (
        <div>
            <h1>This is country detail of {country.name}</h1>
            <h3>Population: {country.population}</h3>
            <p>{country.altSpellings}</p>
        </div>
    );
};

export default CountryDetail;
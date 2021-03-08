import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, subregion, alpha3Code} = props.country;
    const history = useHistory();
    const handleClick = countryCode =>{
        const url = `/country/${countryCode}`
        history.push(url)
    }
    const countryStyle ={
        border: '3px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={countryStyle}>
            <h1>Name: {name}</h1>
            <h5>Capital: {capital}</h5>
            <p>Sub-Region: {subregion}</p>
            <p>
                <Link to={`/country/${alpha3Code}`}>Show detail of {alpha3Code}</Link>
            </p>
            <button onClick={()=> handleClick(alpha3Code)}>Click me</button>
        </div>
    );
};

export default Country;
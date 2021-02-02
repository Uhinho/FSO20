import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(l => <li key={l.iso639_1} style={{ listStyleType: "none" }}>{l.name}</li>)}
            </ul>
            <img src={country.flag} alt="flag" height="100px" border="1px black"/>
        </div>
    )
}

export default Country
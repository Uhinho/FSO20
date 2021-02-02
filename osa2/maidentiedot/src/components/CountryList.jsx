import React from 'react'
import Country from './Country'

const CountryList = ({countries, filter}) => {

    const list = countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
                .map(fc => <li key={fc.name}>{fc.name}</li>)

    const singleCountry = countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    const listToShow = list.length < 10 ? (list.length == 1 ? <Country country={singleCountry[0]}/> : list) : <p>Too many matches, specify another filter</p>
    

    return (
        <div>
            <ul>
                {listToShow}
            </ul>
        </div>


    )
}

export default CountryList

//{countries.map(country => <li>{country.name}</li>)}
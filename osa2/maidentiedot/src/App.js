import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryList from './components/CountryList'
import Filter from './components/Filter'



function App() {

const [ countries, setCountries ] = useState([])
const [ newInput, setInput ] = useState('')

useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
}, [])

const handleInputChange = (e) => {
  setInput(e.target.value)
}




  return (
    <div>
      <Filter onChange={handleInputChange} value={newInput} />
      <CountryList countries={countries} filter={newInput}/>
    </div>
  );
}

export default App;

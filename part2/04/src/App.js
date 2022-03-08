import { useState, useEffect } from 'react'
import axios from 'axios'

const DetailedDisplay = (props) => {
  const langs = Object.values(props.languages)
  const imgs = Object.values(props.flags)
  return (
    <div>
      <h1>{props.name["common"]}</h1>
      <p>capital {props.capital}</p>
      <p>area {props.area}</p>
      <b>languages:</b>
      <ul>
        {langs.map((obj, i) => <li key={i}>{obj}</li>)}
      </ul>
      <img src={imgs[0]} alt='flag'/>
    </div>
  )
}



const App = () => {
  const [countries, setCountries] = useState([])

  const [filtered, setFiltered] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    const filteredCountries = countries.filter(country => country.name["common"].toLowerCase().includes(event.target.value.toLowerCase()) === true)
    setFiltered(filteredCountries)
  }

  const showCountry = (count) => {
    const filteredCountries = countries.filter(country => country.name["common"].toLowerCase().includes(count.toLowerCase()) === true)
    setFiltered(filteredCountries)
  }

  useEffect(hook, [])


  const DisplayFiltered = ({ countriesFiltered }) => {
    if (countriesFiltered.length > 10)
      return (
        <div>Too many matches, specify another filter</div>
      )
    else if (countriesFiltered.length <= 10 && countriesFiltered.length > 1) {
      return (
        <>
          {countriesFiltered.map((country, i) => 
          <div key={i}>
            {country.name["common"]} <button onClick={() => showCountry(country.name["common"])}>show</button>
            </div>)}
        </>
      )
    } 
    else if (countriesFiltered.length === 1) {
      return (
        <>
          {DetailedDisplay(countriesFiltered[0])}
        </>
      )
    }
  
    return (
      <div></div>
    )
  }

  return (
    <div>
      <p>find countries <input value={filter} onChange={handleFilterChange} /></p>
      <DisplayFiltered countriesFiltered={filtered} />
    </div>
  )

}

export default App
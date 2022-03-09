import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const DetailedDisplay = (props) => {
  const langs = Object.values(props.languages)
  const imgs = Object.values(props.flags)

  /*
  GetWeatherData(props.capital)
  .then(data => {console.log(data)})
  */

  return (
    <div>
      <h1>{props.name["common"]}</h1>
      <p>capital {props.capital}</p>
      <p>area {props.area}</p>
      <b>languages:</b>
      <ul>
        {langs.map((obj, i) => <li key={i}>{obj}</li>)}
      </ul>
      <img src={imgs[0]} alt='flag' />
      <DisplayWeather city={props.capital} />
    </div>
  )
}

const DisplayWeather = ({ city }) => {
  const [data, setData] = useState({})
  const componentMounted = useRef(true); // (3) component is mounted

  useEffect(() => {
    GetWeatherData(city).then(retData => { // (5) is component still mounted?
      if (componentMounted.current) {  // (1) write data to state
        setData(retData)
      }

    })
    return () => { // This code runs when component is unmounted
      componentMounted.current = false; // (4) set it to false when we leave the page
    }
  })

  if (data.message === 'ok') {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <p>temperature {data.temperature.toFixed(2)} Celsius</p>
        <img src={data.icon} alt='icon' />
        <p>wind {data.wind} m/s</p>
      </div>
    )
  }

  return (
    <div>{data.message}</div>
  )


}

const GetWeatherData = (city) => {

  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + process.env.REACT_APP_API_KEY)
    .then(response => {
      //console.log(response.data)
      const weatherObj = {
        temperature: response.data.main.temp - 273.15,
        icon: 'https://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png',
        wind: response.data.wind.speed,
        message: 'ok'
      }
      return weatherObj
    })
    .catch(function (error) {
      //console.log(error.response)    
      const weatherObj = {
        message: error.response.data.cod
      }
      return weatherObj
    })
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
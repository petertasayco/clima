import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {
  
  const [loc, setLoc] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
    setLoc(obj);
     }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  

   useEffect(()=>{
    if(loc){
     const API = '59e6d750282b7feb68c490531a2739c3'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&appid=${API}`

      axios.get(URL)
      .then(res=>{
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const farenheit = ((celsius*9/5) + 32).toFixed(1)
        setTemperature({celsius,farenheit})
        setWeather(res.data)})
      .catch(err=>console.log(err))
        }
      },[loc])

  

  return (
    <div className="App">
      {
          weather ? <WeatherCard weather={weather} temperature={temperature} /> : <Loading/>
      }
      
    </div>
  )
}

export default App

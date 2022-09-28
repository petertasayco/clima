import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature }) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const changetemperature = () => { setIsCelsius(!isCelsius) }
    return (
        <article className='card'>
            <h1 className='title'>Weather App</h1>
            <h2 className='location'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
                <section className='first_section'>
                    <img className='icon_central' src={weather ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png` : ''} alt="" />
                    <h2>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
                </section>
                <section className='second_section'>
                    <h3 className='second_title'>{`${weather?.weather[0].description}`}</h3>
                    <ul className='list'>
                        <li className='item'><span className='subtitle'>Wind speed: </span>{`${weather?.wind.speed}`}m/s</li>
                        <li className='item'><span className='subtitle'>Clouds: </span>{`${weather?.clouds.all}`}%</li>
                        <li className='item'><span className='subtitle'>Pressure: </span>{`${weather?.main.pressure}`}hPA</li>
                    </ul>

                </section>
                <button className='btn' onClick={changetemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>

        </article>
    )
}

export default WeatherCard
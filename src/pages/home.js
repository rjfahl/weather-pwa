import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/fetchWeather';

const Home = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    useEffect(() => {
        const func = async () => {
            let params = new URLSearchParams(window.location.search);
            let searchQuery = params.get('search');

            if(searchQuery) {
                const data = await fetchWeather(searchQuery);
                setWeather(data);
            }
        }
        func();
    }, []);

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div>
            <input type="text" className="search" placeholder="Find Weather by City Name..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
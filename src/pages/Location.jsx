import React, { useState } from 'react';

const Location = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const apiKey = import.meta.env.VITE_API_KEY; 
    const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

    try {
      //current weather
      const currentWeatherResponse = await fetch(currentWeatherUrl);
      const currentWeatherData = await currentWeatherResponse.json();

      if (!currentWeatherResponse.ok) throw new Error(currentWeatherData.error.message);

      //7-day forecast
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      if (!forecastResponse.ok) throw new Error(forecastData.error.message);

      setCurrentWeather(currentWeatherData);
      setDailyForecast(forecastData.forecast.forecastday); 
      setError('');
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setDailyForecast(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }}
      />
      <button onClick={handleSearch}>Search</button>
      
      {error && <p>Error: {error}</p>}

      {currentWeather && (
        <div>
          <h1>Current Weather in {currentWeather.location.name}</h1>
          <p>Temperature: {currentWeather.current.temp_c}°C</p>
          <p>Condition: {currentWeather.current.condition.text}</p>
          <img src={currentWeather.current.condition.icon} alt="Weather Icon" />
        </div>
      )}

      {dailyForecast && (
        <div>
          <h2>7-Day Forecast</h2>
          {dailyForecast.map((day) => (
            <div key={day.date}>
              <h3>{day.date}</h3>
              <p>Max: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
              <p>Condition: {day.day.condition.text}</p>
              <img src={day.day.condition.icon} alt="Daily Weather Icon" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;
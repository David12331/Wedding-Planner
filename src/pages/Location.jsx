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
    <div className="mt-10">
      <div className="max-w-2xl mx-auto mb-6">
        <h1 className="text-4xl font-bold mb-2">Wedding Venue: The Enchanted Gardens</h1>
        <p>
          Join us at the enchanting "The Enchanted Gardens" for a magical celebration of love.
          Nestled in the heart of New York City, this picturesque venue is the perfect setting
          for our special day. The lush greenery and elegant surroundings will make this wedding
          an unforgettable experience for all our guests.
        </p>
      </div>

      <p className="text-lg mb-4">
        Welcome to the wedding location! Use the search bar below to check the weather in
        {city} and ensure you dress accordingly for our celebration.
      </p>

      <input
        type="text"
        placeholder="Search your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white">
        Search
      </button>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {currentWeather && (
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Current Weather in {currentWeather.location.name}</h1>
          <p>Temperature: {currentWeather.current.temp_c}°C</p>
          <p>Condition: {currentWeather.current.condition.text}</p>
          <img src={currentWeather.current.condition.icon} alt="Weather Icon" className="mt-2" />
        </div>
      )}

      {dailyForecast && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">7-Day Forecast</h2>
          {dailyForecast.map((day) => (
            <div key={day.date} className="mt-2">
              <h3>{day.date}</h3>
              <p>Max: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
              <p>Condition: {day.day.condition.text}</p>
              <img src={day.day.condition.icon} alt="Daily Weather Icon" className="mt-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;
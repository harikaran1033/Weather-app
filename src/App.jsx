import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import globeVideo from './assets/loading/globe.webm';

import './App.css'

import rain from "./assets/weatherImgs/rain.png"
import showers from "./assets/weatherImgs/showers.png"
import snow from "./assets/weatherImgs/snow.png"
import sun from "./assets/weatherImgs/sun.png"
import thunderstorm from "./assets/weatherImgs/thunderstorm.png"
import partlyCloud from "./assets/weatherImgs/partly cloudy.png"
import mist from "./assets/weatherImgs/mist.png"
import cloudy from "./assets/weatherImgs/cloudy.png"
import magnify from "./assets/weatherImgs/magnify.png"
import latitude from "./assets/weatherImgs/latitude.png"
import longitude from "./assets/weatherImgs/longitude.png"
import clearNight from "./assets/weatherImgs/clearNight.png"

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-32 h-32 object-cover"
      >
        <source src={globeVideo} type="video/webm" />
      </video>
    </div>
  )
}

const WeatherDetails = ({ icon, country, city, celsius, direction, humidity, wind, clouds, day, description, lat, log, afterForecast, afterTemp, afterCloud }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10">
      <div className="flex-1 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileHover={{ scale: 1.03 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col md:flex-row items-center justify-around bg-black/30 rounded-lg p-6 shadow-lg"
        >
          <img src={icon} alt="weather icon" className="w-24 h-24 md:w-32 md:h-32" />
          <p className="text-xl md:text-3xl">{country}</p>
          <p className="text-xl md:text-3xl text-teal-400">{city}</p>
          <p className="text-2xl font-bold" style={{ textShadow: '2px 2px 5px teal' }}>{celsius} °C</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileHover={{ scale: 1.03 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col md:flex-row justify-around items-center gap-4 bg-black/30 rounded-lg p-6 shadow-lg"
        >
          <div className="text-center">
            <p className="text-base md:text-lg">Wind Direction</p>
            <p className="text-orange-400">{direction}</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg">Humidity</p>
            <p className="text-emerald-400">{humidity} %</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg">Wind Speed</p>
            <p className="text-red-400">{wind} m/s</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileHover={{ scale: 1.03 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col md:flex-row justify-around items-center gap-4 bg-black/30 rounded-lg p-6 shadow-lg"
        >
          <div className="text-center">
            <p className="text-base md:text-lg">Clouds</p>
            <p className="text-orange-400">{clouds} %</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg">Day/Night</p>
            <p className="text-emerald-400">{day}</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg">Condition</p>
            <p className="text-red-400 capitalize">{description}</p>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.03 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-black/30 rounded-lg p-4 shadow-lg flex flex-col items-center w-full"
          >
            <img src={latitude} alt="latitude" className="w-24 h-24" />
            <p className="text-lg mt-2">Latitude</p>
            <p className="text-sky-400">{lat}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.03 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-black/30 rounded-lg p-4 shadow-lg flex flex-col items-center w-full"
          >
            <img src={longitude} alt="longitude" className="w-24 h-24" />
            <p className="text-lg mt-2">Longitude</p>
            <p className="text-sky-400">{log}</p>
          </motion.div>
        </div>

        <div className="bg-black/30 rounded-lg p-4 shadow-lg">
          <p className="text-lg font-medium mb-4">Day After Forecast</p>
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div className="flex flex-col items-center flex-1 bg-black/40 p-4 rounded-md shadow">
              <p className="text-base">Condition</p>
              <p className="text-amber-300">{afterForecast}</p>
            </motion.div>
            <motion.div className="flex flex-col items-center flex-1 bg-black/40 p-4 rounded-md shadow">
              <p className="text-base">Temp</p>
              <p className="text-amber-500">{afterTemp} °C</p>
            </motion.div>
            <motion.div className="flex flex-col items-center flex-1 bg-black/40 p-4 rounded-md shadow">
              <p className="text-base">Clouds</p>
              <p className="text-red-400">{afterCloud} %</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ErrorMessage = ({ message }) => (
  <p className="text-red-500 mt-4">{message}</p>
);

function App() {
  const [icon, setIcon] = useState(cloudy);
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [celsius, setCelsius] = useState(0)
  const [direction, setDirection] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [wind, setWind] = useState(0)
  const [clouds, setClouds] = useState(0)
  const [day, setDay] = useState(0)
  const [description, setDescription] = useState("")
  const [lat, setLat] = useState(0)
  const [log, setLog] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("chennai")
  const [cityNotFound, setCityNotFound] = useState(false)
  const [afterForecast, setAfterForecast] = useState("loading...")
  const [afterTemp, setAfterTemp] = useState("loading...")
  const [afterCloud, setAfterCloud] = useState("loading...")
  const [emptyInput, setEmptyInput] = useState(false);
  const [state, setState] = useState(true)

  const weatherIconMap = {
    "01d": sun,
    "01n": clearNight,
    "02d": partlyCloud,
    "02n": partlyCloud,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "09d": showers,
    "09n": showers,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist
  }

  const searching = async () => {
    let api_key = "fbfe4f979756178538d240008706d7b6";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}&units=metric`

    try {
      if (!search.trim()) {
        setEmptyInput(true)
        setState(false)
        return;
      }
      setEmptyInput(false)
      setIsLoading(true)

      const [res] = await Promise.all([
        fetch(url),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`;
      const currentRes = await fetch(currentUrl);
      const currentData = await currentRes.json();
      let data = await res.json();

      if (data.cod === "404" || currentData.cod === "404") {
        setState(false)
        setCityNotFound(true);
        return;
      }

      setState(true)
      setCityNotFound(false)

      let sunrise = currentData.sys.sunrise + currentData.timezone;
      let sunset = currentData.sys.sunset + currentData.timezone;
      let currentTime = currentData.dt + currentData.timezone;

      setDay(currentTime >= sunrise && currentTime < sunset ? "Day" : "Night");

      const deg = data.list[0].wind.deg;
      const getWindDirection = (deg) => {
        const directions = ["North", "NorthEast", "East", "SouthEast", "South", "SouthWest", "West", "NorthWest"];
        return directions[Math.round(deg / 45) % 8];
      }

      const firstForecast = data.list[0];
      const nextForecast = data.list[1];
      const cityData = data.city;
      const weatherIconCode = firstForecast.weather[0].icon;

      setDirection(getWindDirection(deg));
      setHumidity(firstForecast.main.humidity);
      setLat(cityData.coord.lat);
      setLog(cityData.coord.lon);
      setCountry(cityData.country);
      setCelsius(firstForecast.main.temp);
      setCity(cityData.name);
      setIcon(weatherIconMap[weatherIconCode] || sun);
      setWind(firstForecast.wind.speed);
      setClouds(firstForecast.clouds.all);
      setDescription(firstForecast.weather[0].description);
      setAfterForecast(nextForecast.weather[0].description);
      setAfterTemp(nextForecast.main.temp)
      setAfterCloud(nextForecast.clouds.all);
    } catch (err) {
      console.log("Error occurred:", err.message);
    } finally {
      setIsLoading(false)
    }
  }

  const handleCity = (e) => setSearch(e.target.value)
  const handleKeyDown = (e) => { if (e.key === "Enter") searching(); }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { searching(); }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f2937] to-[#111827] text-gray-300 py-20 px-6 md:px-20">
      <div className="text-center md:text-left">
        <h2 className="text-4xl tracking-wider font-bold">
          <span className="text-orange-500" style={{ textShadow: '3px 3px 5px black' }}>W</span>eatherly
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>

 <div className="flex flex-row gap-4 mt-10 w-full">
  <input
    type="text"
    placeholder="Enter City Name"
    className={`bg-gray-800 h-12 rounded-md px-4 text-base w-full capitalize ${
      emptyInput ? "placeholder-red-400" : ""
    }`}
    value={search}
    onChange={handleCity}
    onKeyDown={handleKeyDown}
  />
  <img
    src={magnify}
    alt="search"
    className="w-12 h-12 bg-gray-800 p-2 cursor-pointer rounded-md"
    onClick={searching}
  />
</div>


      {cityNotFound && !emptyInput && <ErrorMessage message="City not found..." />}
      {emptyInput && !cityNotFound && <ErrorMessage message="Please enter a city name." />}

      {isLoading ? <Loading /> : (
        state && (
          <WeatherDetails
            icon={icon}
            country={country}
            city={city}
            celsius={celsius}
            direction={direction}
            humidity={humidity}
            wind={wind}
            clouds={clouds}
            day={day}
            description={description}
            lat={lat}
            log={log}
            afterForecast={afterForecast}
            afterTemp={afterTemp}
            afterCloud={afterCloud}
          />
        )
      )}
    </div>
  )
}

export default App

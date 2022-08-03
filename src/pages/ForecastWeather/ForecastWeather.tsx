import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ForecastItem from "../../components/ForecastItem"
import { ConfigContext } from "../../context/configContext"
import {
  IAutocomplete,
  IForecastWeather,
  initialForecastWeather,
  nextFiveDays,
} from "../../types/API"
import { ConfigContextType } from "../../types/config"
import { getForecast } from "../../util/APIutil"
import LoadLocation from "../../components/LoadLocation"

const ForecastWeather: React.FC = () => {
  const { config } = useContext(ConfigContext) as ConfigContextType
  const [forecastWeather, setForecastWeather] = useState<IForecastWeather>(
    initialForecastWeather
  )
  const [loading, setLoading] = useState<boolean>(true)
  const location = useLocation()
  const city = location.state as IAutocomplete

  useEffect(() => {
    const getForecastWeather = async (
      lon: number,
      lat: number,
      lang: string,
      units: string
    ) => {
      try {
        const forecast = await getForecast(lon, lat, lang, units)
        console.log(forecast)
        const nextDays = nextFiveDays(forecast)
        setForecastWeather(nextDays)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    if (city) {
      if (config.temp === "C") {
        getForecastWeather(
          city.properties.lon,
          city.properties.lat,
          config.lang,
          "metric"
        )
      } else {
        getForecastWeather(
          city.properties.lon,
          city.properties.lat,
          config.lang,
          "imperial"
        )
      }
    }
  }, [config.lang, config.temp, city])

  return (
    <div className="container">
      {loading ? (
        <LoadLocation />
      ) : (
        <>
          <h1 className="title">
            {(city.properties.city || city.properties.county).toUpperCase()}
          </h1>
          <p className="description" style={{ marginTop: "0" }}>
            {config.dictionaryList[config.lang].forecastDescription}
          </p>
          {forecastWeather.list.map((forecast, index) => (
            <ForecastItem key={index} state={forecast} />
          ))}
        </>
      )}
    </div>
  )
}

export default ForecastWeather

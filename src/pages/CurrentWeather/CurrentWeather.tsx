import { useEffect, useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  IAutocomplete,
  ICurrentWeather,
  initialCurrentWeather,
} from "../../types/API"
import { ConfigContext } from "../../context/configContext"
import { ConfigContextType } from "../../types/config"
import { getCurrent } from "../../util/APIutil"
import LoadLocation from "../../components/LoadLocation"
import "./styles.css"

const CurrentWeather: React.FC = () => {
  const { config } = useContext(ConfigContext) as ConfigContextType
  const [loading, setLoading] = useState<boolean>(true)
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>(
    initialCurrentWeather
  )

  const location = useLocation()
  const city = location.state as IAutocomplete

  useEffect(() => {
    const getCurrentWeather = async (
      lon: number,
      lat: number,
      lang: string,
      units: string
    ) => {
      try {
        const weather = await getCurrent(lon, lat, lang, units)
        setCurrentWeather(weather)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    if (city) {
      if (config.temp === "C") {
        getCurrentWeather(
          city.properties.lon,
          city.properties.lat,
          config.lang,
          "metric"
        )
      } else {
        getCurrentWeather(
          city.properties.lon,
          city.properties.lat,
          config.lang,
          "imperial"
        )
      }
    }
  }, [city, config.lang, config.temp])

  return (
    <div className="container container-current">
      {loading ? (
        <LoadLocation />
      ) : (
        <>
          <h1 className="title">
            {(city.properties.city || city.properties.county).toUpperCase()}
          </h1>
          <p className="description">
            {currentWeather.weather[0].description.charAt(0).toUpperCase() +
              currentWeather.weather[0].description.slice(1)}
          </p>
          <div>
            <div className="container-temp-icon">
              <span className="temp">
                {currentWeather.main.temp.toFixed(0)}°
              </span>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <p className="temp-min-max">
              <span style={{ fontWeight: "bold" }}>MAX:</span>{" "}
              {currentWeather.main.temp_max.toFixed(0)}°{" "}
              <span style={{ fontWeight: "bold" }}>MIN:</span>{" "}
              {currentWeather.main.temp_min.toFixed(0)}°
            </p>
          </div>
          <Link
            state={city}
            className="forecast-link"
            to={`/${city.properties.place_id.substring(0, 10)}/forecast`}
          >
            {config.dictionaryList[config.lang].forecastLink}
          </Link>
        </>
      )}
    </div>
  )
}

export default CurrentWeather

import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ConfigContext } from "../../context/configContext"
import { IAutocomplete } from "../../types/API"
import { ConfigContextType } from "../../types/config"
import { getAutocomplete } from "../../util/APIutil"
import "./styles.css"

const SearchWeather: React.FC = () => {
  const { config } = useContext(ConfigContext) as ConfigContextType
  const [city, setCity] = useState<string>("")
  const [cities, setCities] = useState<IAutocomplete[]>([])
  const searchBar = useRef<HTMLInputElement>(null)
  const mainTitle = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (city) {
      const autocomplete = async (city: string, lang: string) => {
        try {
          const cities = await getAutocomplete(city, lang)
          console.log(cities)
          setCities(cities)
          if (searchBar.current !== null) {
            searchBar.current.classList.add("search-bar-active")
          }
          if (cities.length === 0) {
            setCities([])

            if (searchBar.current !== null) {
              searchBar.current.classList.remove("search-bar-active")
            }
          }
        } catch (error) {
          console.error(error)
        }
      }

      const delayAutocomplete = setTimeout(() => {
        autocomplete(city, config.lang)
      }, 500)

      return () => clearTimeout(delayAutocomplete)
    } else {
      setCities([])
      if (searchBar.current !== null) {
        searchBar.current.classList.remove("search-bar-active")
      }
    }

    if (config.lang === "en") {
      if (mainTitle.current !== null) {
        mainTitle.current.classList.add("letter-spacing")
      }
    } else {
      if (mainTitle.current !== null) {
        mainTitle.current.classList.remove("letter-spacing")
      }
    }
  }, [city, config.lang])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }
  return (
    <div className="container-search">
      <h2 className="main-title" ref={mainTitle}>
        {config.dictionaryList[config.lang].searchWeatherTitle}
      </h2>
      <input
        ref={searchBar}
        className="search-bar"
        type="text"
        value={city}
        onChange={handleChange}
        placeholder={
          config.dictionaryList[config.lang].searchWeatherPlaceholder
        }
      />
      {cities.length > 0 && (
        <div className="container-autocomplete">
          {cities.map((city, index) => (
            <div key={index} className="container-link">
              <Link className="link" to={`/${city.properties.city}`}>
                {city.properties.city || city.properties.county},{" "}
                {city.properties.state}, {city.properties.country}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchWeather

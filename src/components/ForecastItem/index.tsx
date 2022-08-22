import React, { useContext } from "react"
import { ConfigContext } from "../../context/configContext"
import { ConfigContextType } from "../../types/config"
import "./styles.css"

type Props = {
  state: {
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    weather: {
      id: number
      description: string
      icon: string
    }[]
    dt_txt: string
  }
}

const ForecastItem: React.FC<Props> = ({ state }) => {
  const { config } = useContext(ConfigContext) as ConfigContextType
  const date = new Date(state.dt_txt.replace(/-/g, "/"))

  return (
    <div className="forecast-item">
      <h2 className="text-item text-date">
        {config.dictionaryList[config.lang][`day${date.getDay()}`]},{" "}
        {date.getDate()}{" "}
        {config.dictionaryList[config.lang][`month${date.getMonth()}`]}
      </h2>
      <img
        className="icon-item"
        src={`http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`}
        alt=""
      />
      <span className="text-item">{state.main.temp_min.toFixed(0)}°</span>
      <div className="temp-gradient"></div>
      <span className="text-item">{state.main.temp_max.toFixed(0)}°</span>
      <span className="text-item description-item">
        {state.weather[0].description}
      </span>
    </div>
  )
}

export default ForecastItem

import { useContext } from "react"
import { ConfigContext } from "../../context/configContext"
import { ConfigContextType } from "../../types/config"
import "./styles.css"

const SearchWeather: React.FC = () => {
  const { config } = useContext(ConfigContext) as ConfigContextType
  return (
    <div className="container-search">
      <h2 className="main-title">
        {config.dictionaryList[config.lang].searchWeatherTitle}
      </h2>
      <input
        className="search-bar"
        type="text"
        placeholder={
          config.dictionaryList[config.lang].searchWeatherPlaceholder
        }
      />
    </div>
  )
}

export default SearchWeather

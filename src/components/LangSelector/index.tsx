import React, { useContext } from "react"
import { ConfigContext } from "../../context/configContext"
import { ConfigContextType } from "../../types/config"
import "./styles.css"

const LangSelector = () => {
  const { config, setLang } = useContext(ConfigContext) as ConfigContextType

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    setLang(e.currentTarget.id)
  }

  return (
    <div className="container-lang-selector">
      <div className="flags-container">
        <button className="flag" id="pt" onClick={handleClick}>
          <img src="/assets/brasil-icon.png" alt="Brazilian Flag" />
        </button>
        <button className="flag" id="en" onClick={handleClick}>
          <img src="/assets/usa-icon.png" alt="American Flag" />
        </button>
        <button className="flag" id="es" onClick={handleClick}>
          <img src="/assets/spain-icon.png" alt="Spanish Flag" />
        </button>
      </div>
      <div className="text-container">
        {config.dictionaryList[config.lang].langSelector}
      </div>
    </div>
  )
}

export default LangSelector

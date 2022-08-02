import { useState, createContext } from "react"
import { IConfig, ConfigContextType, dictionaryList } from "../types/config"

export const ConfigContext = createContext<ConfigContextType | null>(null)

type Props = {
  children: React.ReactNode
}

const ConfigProvider: React.FC<Props> = ({ children }) => {
  const [config, setConfig] = useState<IConfig>({
    lang: "ptBr",
    temp: "C",
    dictionaryList: dictionaryList,
  })

  const setLang = (lang: string) => {
    setConfig({ ...config, lang })
  }

  const setTemp = (temp: string) => {
    setConfig({ ...config, temp })
  }
  return (
    <ConfigContext.Provider value={{ config, setLang, setTemp }}>
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider

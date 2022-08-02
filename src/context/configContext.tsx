import React from "react"
import { IConfig, ConfigContextType } from "../types/config"

export const TodoContext = React.createContext<ConfigContextType | null>(null)

type Props = {
  children: React.ReactNode
}

const ConfigProvider: React.FC<Props> = ({ children }) => {
  const [config, setConfig] = React.useState<IConfig>({
    lang: "PT-BR",
    temp: "C",
  })

  const setLang = (lang: string) => {
    setConfig({ ...config, lang })
  }

  const setTemp = (temp: string) => {
    setConfig({ ...config, temp })
  }
  return (
    <TodoContext.Provider value={{ config, setLang, setTemp }}>
      {children}
    </TodoContext.Provider>
  )
}

export default ConfigProvider

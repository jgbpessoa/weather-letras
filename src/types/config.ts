export interface IConfig {
  lang: string
  temp: string
}

export type ConfigContextType = {
  config: IConfig
  setLang: (lang: string) => void
  setTemp: (temp: string) => void
}

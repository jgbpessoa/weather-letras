import pt from "../languages/pt.json"
import en from "../languages/en.json"
import es from "../languages/es.json"

export const dictionaryList = { pt, en, es }

export interface IConfig {
  lang: string
  temp: string
  dictionaryList: {
    [dic: string]: { [key: string]: string }
  }
}

export type ConfigContextType = {
  config: IConfig
  setLang: (lang: string) => void
  setTemp: (temp: string) => void
}

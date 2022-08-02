import ptBr from "../languages/ptBr.json"
import en from "../languages/en.json"
import es from "../languages/es.json"

export const dictionaryList = { ptBr, en, es }

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

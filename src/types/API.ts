export interface IAutocomplete {
  properties: {
    city: string
    county: string
    country: string
    state: string
    lon: number
    lat: number
    place_id: string
  }
}

export interface ICurrentWeather {
  weather: { id: number; description: string; icon: string }[]

  main: {
    temp: number
    temp_min: number
    temp_max: number
  }
}
export const initialCurrentWeather = {
  weather: [{ id: 0, description: "", icon: "" }],
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0,
  },
}

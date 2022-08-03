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

export interface IForecastWeather {
  list: {
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    weather: { id: number; description: string; icon: string }[]
    dt_txt: string
  }[]
}

export const initialForecastWeather = {
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
      },
      weather: [{ id: 0, description: "", icon: "" }],
      dt_txt: "",
    },
  ],
}

const getTempMaxMin = (list: IForecastWeather["list"]) => {
  const tempsMax = list.map((forecast) => forecast.main.temp_max)
  const tempsMin = list.map((forecast) => forecast.main.temp_min)

  // Coloquei a segunda previsao do dia como padrão para descrição e icon
  list[1].main.temp_max = Math.max.apply(null, tempsMax)
  list[1].main.temp_min = Math.min.apply(null, tempsMin)

  return list[1]
}

export const nextFiveDays = (forecastWeather: IForecastWeather) => {
  // Percebi que dependendo do horário do dia a resposta da API muda. Dessa forma, criei uma lógica para checar se a API ainda esté mandando dados de hoje ou se já está enviando dados com a data de amanhã

  const forecastList = [...forecastWeather.list]
  const todaySystem = new Date()
  const todayAPI = forecastList[0].dt_txt
  const todayAPIDate = new Date(todayAPI)

  let day1Forecasts,
    day2Forecasts,
    day3Forecasts,
    day4Forecasts,
    day5Forecasts,
    restOfTheDays

  if (todaySystem.getDate() === todayAPIDate.getDate()) {
    restOfTheDays = forecastList.filter(
      (forecast) => !forecast.dt_txt.includes(todayAPI.split("")[0])
    )

    day1Forecasts = restOfTheDays.splice(0, 8)
    day2Forecasts = restOfTheDays.splice(0, 8)
    day3Forecasts = restOfTheDays.splice(0, 8)
    day4Forecasts = restOfTheDays.splice(0, 8)
    day5Forecasts = restOfTheDays
  } else {
    day1Forecasts = forecastList.filter((forecast) =>
      forecast.dt_txt.includes(todayAPI.split(" ")[0])
    )
    restOfTheDays = forecastList.filter(
      (forecast) => !forecast.dt_txt.includes(todayAPI.split(" ")[0])
    )

    day2Forecasts = restOfTheDays.splice(0, 8)
    day3Forecasts = restOfTheDays.splice(0, 8)
    day4Forecasts = restOfTheDays.splice(0, 8)
    day5Forecasts = restOfTheDays
  }

  forecastWeather.list[0] = getTempMaxMin(day1Forecasts)
  forecastWeather.list[1] = getTempMaxMin(day2Forecasts)
  forecastWeather.list[2] = getTempMaxMin(day3Forecasts)
  forecastWeather.list[3] = getTempMaxMin(day4Forecasts)
  forecastWeather.list[4] = getTempMaxMin(day5Forecasts)

  forecastWeather.list.splice(5)

  return forecastWeather
}

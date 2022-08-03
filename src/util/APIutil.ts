import axios from "axios"
const API_KEY_AUTO = process.env.API_KEY_AUTO
const API_URL_AUTO = "https://api.geoapify.com/v1/geocode/autocomplete"
const API_KEY_WEATHER = process.env.API_KEY_WEATHER
const API_URL_WEATHER_CURRENT =
  "https://api.openweathermap.org/data/2.5/weather"
const API_URL_WEATHER_FORECAST =
  "https://api.openweathermap.org/data/2.5/forecast"

export const getAutocomplete = async (city: string, lang: string) => {
  try {
    const response = await axios.get(API_URL_AUTO, {
      params: {
        type: "city",
        text: `${city}`,
        apiKey: `${API_KEY_AUTO}`,
        lang: `${lang}`,
        limit: "10",
      },
    })

    return response.data.features
  } catch (error) {
    throw error
  }
}

export const getCurrent = async (
  lon: number,
  lat: number,
  lang: string,
  units: string
) => {
  try {
    if (lang === "pt") lang = "pt_br"
    const response = await axios.get(API_URL_WEATHER_CURRENT, {
      params: {
        lat,
        lon,
        appid: `${API_KEY_WEATHER}`,
        lang: `${lang}`,
        units,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export const getForecast = async (
  lon: number,
  lat: number,
  lang: string,
  units: string
) => {
  try {
    if (lang === "pt") lang = "pt_br"
    const response = await axios.get(API_URL_WEATHER_FORECAST, {
      params: {
        lat,
        lon,
        appid: `${API_KEY_WEATHER}`,
        lang: `${lang}`,
        units,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

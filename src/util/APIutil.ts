import axios from "axios"
const API_URL_AUTO = "https://api.geoapify.com/v1/geocode/autocomplete"
const API_KEY = process.env.API_KEY

export const getAutocomplete = async (city: string, lang: string) => {
  try {
    const response = await axios.get(API_URL_AUTO, {
      params: {
        type: "city",
        text: `${city}`,
        apiKey: `${API_KEY}`,
        lang: `${lang}`,
        limit: "10",
      },
    })

    return response.data.features
  } catch (error) {
    throw error
  }
}

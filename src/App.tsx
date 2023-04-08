import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SearchWeather from "./pages/SearchWeather"
import CurrentWeather from "./pages/CurrentWeather/CurrentWeather"
import ForecastWeather from "./pages/ForecastWeather/ForecastWeather"
import "./style.css"
import Header from "./components/Header"
import TempToggle from "./components/TempToggle"
import Footer from "./components/Footer"
import LangSelector from "./components/LangSelector"
import ConfigProvider from "./context/configContext"
import BackBtn from "./components/BackBtn"

function App() {
  const isProduction = process.env.NODE_ENV === "production"
  console.log(process.env.NODE_ENV)
  return (
    <>
      <ConfigProvider>
        <h1 className="visually-hidden">
          Digite o nome da cidade para obter a previsão do tempo
        </h1>
        <Router basename={isProduction ? "/weather-letras/" : "/"}>
          <Header>
            <BackBtn />
            <TempToggle label={["°F", "°C"]} />
          </Header>
          <Routes>
            <Route path="/" element={<SearchWeather />} />
            <Route path="/:coord" element={<CurrentWeather />} />
            <Route path="/:coord/forecast" element={<ForecastWeather />} />
          </Routes>
        </Router>
        <Footer>
          <LangSelector />
        </Footer>
      </ConfigProvider>
    </>
  )
}

export default App

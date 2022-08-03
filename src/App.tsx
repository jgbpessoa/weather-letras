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

function App() {
  return (
    <>
      <ConfigProvider>
        <h1 className="visually-hidden">Previsão do tempo para a sua cidade</h1>
        <Header>
          <TempToggle label={["°F", "°C"]} />
        </Header>
        <Router>
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

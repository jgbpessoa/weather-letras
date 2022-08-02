import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SearchWeather from "./pages/SearchWeather/SearchWeather"
import DailyWeather from "./pages/DailyWeather/DailyWeather"
import WeeklyWeather from "./pages/WeeklyWeather/WeeklyWeather"
import "./style.css"
import Header from "./components/Header"
import TempToggle from "./components/TempToggle"

function App() {
  return (
    <>
      <Header>
        <TempToggle label={["°F", "°C"]} />
      </Header>
      <Router>
        <Routes>
          <Route path="/" element={<SearchWeather />} />
          <Route path="/:city" element={<DailyWeather />} />
          <Route path="/:city/weekly" element={<WeeklyWeather />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

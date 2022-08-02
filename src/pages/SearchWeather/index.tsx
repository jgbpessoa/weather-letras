import "./styles.css"

const SearchWeather: React.FC = () => {
  return (
    <div className="container-search">
      <h2 className="main-title">Como está o tempo hoje?</h2>
      <input
        className="search-bar"
        type="text"
        placeholder="Digite o nome da cidade"
      />
    </div>
  )
}

export default SearchWeather

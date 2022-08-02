import "./styles.css"

const LangSelector = () => {
  return (
    <div className="container">
      <div className="flags-container">
        <span>
          <img src="../../assets/brasil-icon.png" alt="Brazilian Flag" />
        </span>
        <span>
          <img src="../../assets/usa-icon.png" alt="American Flag" />
        </span>
        <span>
          <img src="../../assets/spain-icon.png" alt="Spanish Flag" />
        </span>
      </div>
      <div className="text-container">Idioma Selecionado: Português</div>
    </div>
  )
}

export default LangSelector

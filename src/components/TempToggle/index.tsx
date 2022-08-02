import "./styles.css"

type Props = {
  label: string[]
}

const TempToggle: React.FC<Props> = ({ label }) => {
  return (
    <div>
      <fieldset
        className="header__toggle toggle"
        aria-label="temperature toggle"
        role="radiogroup"
      >
        <label htmlFor="fahrenheit">
          <span className="visually-hidden">Temperature</span>
          {label[0]}
        </label>
        <div className="toggle__wrapper">
          <input type="radio" name="theme" id="fahrenheit" />
          <input type="radio" name="theme" id="celsius" />
          <span aria-hidden="true" className="toggle__background"></span>
          <span aria-hidden="true" className="toggle__button"></span>
        </div>
        <label htmlFor="celsius">
          <span className="visually-hidden">Temperature</span>
          {label[1]}
        </label>
      </fieldset>
    </div>
  )
}

export default TempToggle

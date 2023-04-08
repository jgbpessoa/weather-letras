import { useLocation, useNavigate } from "react-router-dom"
import "./styles.css"

const BackBtn = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
      {location.pathname === "/" ? (
        ""
      ) : (
        <button className="btn-back" onClick={handleClick}>
          <img src="/assets/right-arrow.svg" alt="Back Button" />
        </button>
      )}
    </>
  )
}

export default BackBtn

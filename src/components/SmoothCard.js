import { Link } from "react-router-dom"

const SmoothCard = ({ smooth }) => {
    return (
      <div className="smooth-card">
        <h3>{smooth.title}</h3>
        <p>{smooth.method}</p>
        <div className="rating">{smooth.rating}</div>
        <div className="buttons">
        <Link to={"/" + smooth.id}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
      </div>
    )
  }
  
  export default SmoothCard
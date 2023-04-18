import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"

const SmoothCard = ({ smooth }) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('smoothes')
      .delete()
      .eq('id', smooth.id)
    
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
    }
  }

    return (
      <div className="smooth-card">
        <h3>{smooth.title}</h3>
        <p>{smooth.method}</p>
        <div className="rating">{smooth.rating}</div>
        <div className="buttons">
        <Link to={"/" + smooth.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>delete</i>
      </div>
      </div>
    )
  }
  
  export default SmoothCard
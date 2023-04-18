const SmoothCard = ({ smooth }) => {
    return (
      <div className="smooth-card">
        <h3>{smooth.title}</h3>
        <p>{smooth.method}</p>
        <div className="rating">{smooth.rating}</div>
      </div>
    )
  }
  
  export default SmoothCard
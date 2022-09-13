import './Card.css';


const Card = ({ title, byline, id, image}) => {

  return (
    <div className="card">
      <h2 className="article-title">{title}</h2>
      <p className="byline">{byline}</p>
      <img className="thumbnail-img" src={image} alt={title} />
    </div>
  )
}

export default Card;
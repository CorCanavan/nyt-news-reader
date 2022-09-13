import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, byline, id, image}) => {

  return (
    <Link to={`/article/${id}`}>
      <div className="card">
        <h2 className="article-title">{title}</h2>
        <p className="byline">{byline}</p>
        <img className="thumbnail-img" src={image} alt={title} />
      </div>
    </Link>
  )
}

export default Card;
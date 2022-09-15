import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, byline, id, image}) => {

  return (
    <Link to={`/article/${id}`}>
      <div className="card">
          { image ? <img className="thumbnail-img" src={image} alt={title} /> : null }
        <section className="card-text">
          <h2 className="article-title">{title}</h2>
          <p className="byline">{byline}</p>
        </section>
      </div>
    </Link>
  )
}

export default Card;
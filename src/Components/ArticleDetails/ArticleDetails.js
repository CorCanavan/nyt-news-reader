import './ArticleDetails.css';
import { Link } from 'react-router-dom';

const ArticleDetails = ({title, byline, abstract, url, multimedia}) => {

  let lgImage = multimedia ? multimedia.find(image => image.format === "threeByTwoSmallAt2X").url : null

  return (
    <div className="details-container">
      <section className="article-info">
        <h2 className="details-title">{title}</h2>
        <p className="details-byline">{byline}</p>
        <p className="details-abstract">{abstract}</p>
        <a href={url}><p>Read the full article here.</p></a>
      </section>
      <img className="details-img" src={lgImage} alt={title} />
      <Link to="/">
        <button className="back-btn">BACK</button>
      </Link>
    </div>

  )
}

export default ArticleDetails;
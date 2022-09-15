import './ArticleDetails.css';
import { Link } from 'react-router-dom';

const ArticleDetails = ({title, byline, abstract, url, multimedia}) => {

  let lgImage = multimedia ? multimedia.find(image => image.format === "threeByTwoSmallAt2X").url : null

  return (
    <div className="details-container">
      <section className="article-info">
        <p>{title}</p>
        <p>{byline}</p>
        <p>{abstract}</p>
        <a href={url}><p>Read the full article here.</p></a>
      </section>
      <section className="article-image">
        <img src={lgImage} alt={title} />
      </section>
      <Link to="/">
        <button className="back-btn">BACK</button>
      </Link>
    </div>

  )
}

export default ArticleDetails;
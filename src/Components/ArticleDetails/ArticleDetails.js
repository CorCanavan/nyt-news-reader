import './ArticleDetails.css';

const ArticleDetails = ({title, byline, abstract, url, multimedia}) => {

  let lgImage = multimedia ? multimedia.find(image => image.format === "threeByTwoSmallAt2X").url : null

  return (
    <div className="details-container">
      <p>{title}</p>
      <p>{byline}</p>
      <p>{abstract}</p>
      <a href={url}><p>Read the full article here.</p></a>
      <img src={lgImage} />
    </div>

  )
}

export default ArticleDetails;
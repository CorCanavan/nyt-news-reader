import './ArticleDetails.css';

const ArticleDetails = ({title, byline, abstract, url, multimedia}) => {

  const lgImage = multimedia.find(image => image.format === "threeByTwoSmallAt2X")

  return (
    <div className="details-container">
      <p>{title}</p>
      <p>{byline}</p>
      <p>{abstract}</p>
      <a href={url}><p>Read the full article here.</p></a>
      <img src={lgImage.url} />
    </div>

  )
}

export default ArticleDetails;
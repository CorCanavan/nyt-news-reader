import './Articles.css';
import Card from '../Card/Card';


const Articles = ({ sectionArticles }) => {

  const articleCards = sectionArticles.map((article, index) => {
    const thumbnailImage = article.multimedia.find(image => image.format === "Large Thumbnail")

    return (
      <Card 
        title={article.title}
        byline={article.byline}
        id={Date.now()}
        key={index}
        image={thumbnailImage.url}
      />
    )
  })
  return (
    <div className="articles-container">
      {articleCards}
    </div>
  )
}

export default Articles; 

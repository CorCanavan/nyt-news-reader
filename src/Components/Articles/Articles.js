import './Articles.css';
import Card from '../Card/Card';


const Articles = ({ sectionArticles }) => {

  const articleCards = sectionArticles.map((article, index) => {
    let thumbnailImage = article.multimedia ? article.multimedia.find(image => image.format === "Large Thumbnail").url : null 
      return (
        <Card 
          title={article.title}
          byline={article.byline}
          id={article.created_date}
          key={index}
          image={thumbnailImage}
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

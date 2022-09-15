import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Dropdown from '../Dropdown/Dropdown';
import { getSectionArticles } from '../../apiCalls';

const App = () => {

  const [sectionArticles, setSectionArticles] = useState([])
  const [sectionKeyword, setSectionKeyword] = useState('home')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getSectionArticles(sectionKeyword)
    .then(data => {
      const articleData = data.results.filter(result => result.item_type === "Article")
      setSectionArticles(articleData)
    })
    .catch(error => setErrorMessage(`Oops! We're sorry, something went wrong. ${error.message}`))
  }, [sectionKeyword])

  const handleSectionSelection = (section) => {
    setSectionKeyword(section)
  }

  return (
    <main className="main-container">
      <header>
        <Link to="/">
          <h1>New York Times News Reader</h1>
        </Link>
      </header>
        {errorMessage && <p>{errorMessage}</p>}
        <Route 
          exact path="/"
          render={() => {
            return <div>
              <Dropdown handleSectionSelection={handleSectionSelection} sectionKeyword={sectionKeyword} />
              <Articles sectionArticles={sectionArticles} />
            </div>
          }}
        />
        <Route 
          exact path="/article/:id"
          render={({ match }) => {
            const articleToRender = sectionArticles.find(article => article.created_date === match.params.id)
            return <ArticleDetails {...articleToRender} />
          }}
        />
    </main>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Dropdown from '../Dropdown/Dropdown';
import { getSectionArticles } from '../../apiCalls';

const App = () => {

  const [sectionArticles, setSectionArticles] = useState([])
  const [sectionKeyword, setSectionKeyword] = useState('home')
  const [errorMessage, setErrorMessage] = useState('')
  // const getSectionArticles = (section) => {
  //   fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=g4TGZ3U9xgkWWNQIkvS184rsdQ0A0G8d`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setSectionArticles(data.results)
  //   })
  // }

  useEffect(() => {
    getSectionArticles(sectionKeyword)
    .then(data => {
      const articleData = data.results.filter(result => result.item_type === "Article")
      console.log(articleData, "articleData")
      setSectionArticles(articleData)
    })
    .catch(error => setErrorMessage(`Oops! We're sorry, something went wrong. ${error.message}`))
  }, [sectionKeyword])

  const handleSectionSelection = (section) => {
    setSectionKeyword(section)
    // getSectionArticles(section)
  }

  return (
    <main className="main-container">
      <header>
        <h1>New York Times News Reader</h1>
      </header>
        {errorMessage && <p>{errorMessage}</p>}
        <Route 
          exact path="/"
          render={() => {
            return <div className="wrapper">
              <Dropdown handleSectionSelection={handleSectionSelection} sectionKeyword={sectionKeyword} />
              <Articles sectionArticles={sectionArticles} />
            </div>

          }}
        />
        <Route 
          exact path="/article/:id"
          render={({ match }) => {
            const articleToRender = sectionArticles.find(article => article.created_date === match.params.id)
            console.log("match.params", match.params)
            console.log("article", articleToRender
            )
            return <ArticleDetails {...articleToRender} />
          }}
        />
    </main>
  )
}

export default App;

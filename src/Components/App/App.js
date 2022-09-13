import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Dropdown from '../Dropdown/Dropdown';
import mockData from '../../mockData';

const App = () => {

  const [sectionArticles, setSectionArticles] = useState([])
  const [sectionKeyword, setSectionKeyword] = useState('')

  const getHomeArticles = () => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=g4TGZ3U9xgkWWNQIkvS184rsdQ0A0G8d')
    .then(response => response.json())
    .then(data => {
      console.log("data", data)
      setSectionArticles(data.results)
    })
  }

  useEffect(() => {
    getHomeArticles()
  }, [])

  return (
    <main className="main-container">
      <header>
        <h1>New York Times News Reader</h1>
      </header>
        <Route 
          exact path="/"
          render={() => {
            return <div>
              <Dropdown />
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

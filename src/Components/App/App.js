import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Dropdown from '../Dropdown/Dropdown';
import mockData from '../../mockData';

const App = () => {

  const [sectionArticles, setSectionArticles] = useState(mockData)
  const [sectionKeyword, setSectionKeyword] = useState('')

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
        {/* <Route 
          exact path="/article/:id"
          render={({ match }) => {
            const articleToRender = articles.find(article => article.id === parseInt(match.params.id))
            return <ArticleDetails {...articleToRender} />
          }}
        /> */}
    </main>
  )
}

export default App;

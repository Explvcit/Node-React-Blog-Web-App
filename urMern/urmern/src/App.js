import React from 'react'
import Articles from './comps/Articles/Articles'
import SingleArticle from "./comps/Articles/SingleArticle"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewArticle from './comps/Articles/NewArticle'
import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8082/api/articles/'
  })
  

  

function App() {
    api.get("/").then(res => {
    console.log("Loaded Posts")
  })
    return (
        <Router>
        <div>
          <Route exact path='/' component={Articles} />
          <Route exact path='/new' component={NewArticle} />
          <Route path="/articles/:articleId">
            <SingleArticle />
          </Route>
            
        </div>
        </Router>
    )
}

export default App

import React, { Component } from 'react'
import axios from 'axios'
import ArticleCard from './Article'
import Nav from './Navbar'


//Article Index
class ArticleList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: []
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:8082/api')
        .then(res => {
          this.setState({
            articles: res.data
          })
        })
        .catch(err =>{
          console.log('Error from ArticleList');
        })
    };
  
  
    render() {
      const articles = this.state.articles;
      console.log("PrintArticle: " + articles);
      let articleList;
  
      if(!articles) {
        articleList = "there is no record!";
      } else {
        articleList = articles.map((article, k) =>
          <ArticleCard article={article} key={k} />
        );
      }
  
      return (
        
        <div className="ArticleList">
          <Nav></Nav>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
              </div>
              {articleList}
          </div>
          </div>
        </div>
      );
    }
  }
  
  export default ArticleList;
import React from 'react'
import { Link } from 'react-router-dom'
import "./article.css"


const ArticleCard = (props) => {
    const  article  = props.article;

    return(
      <div className=" article">
            <div className="artDesc">
            <span className="artDate">
        {new Date(article.createdAt).toDateString()}
              </span>
                <h2 className="artTitle">{article.title}
                
                </h2>
                <p className="artDesc">{article.description}</p>
      </div>
            
        <Link to={`/articles/${article._id}`} className="link">
          <h6 className="readMore">Read More</h6>
        </Link>
      </div>
    )
};

export default ArticleCard;
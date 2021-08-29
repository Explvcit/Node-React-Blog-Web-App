import axios from "axios"
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./article.css"
import "./NewArticle.css"

export default function SingleArt(props) {
    const [title, setTitle] = useState("")
    const [article, setArticle] = useState("")
    const [description, setDescription] = useState("")
    const location = useLocation();
    const path = location.pathname.split("/")[2]

    useEffect(() => {
        const getArticle = async () => {
            const res = await axios.get("http://localhost:8082/api/articles/" + path)
            console.log("here")
            setArticle(res.data)
            setTitle(res.data.title)
            setDescription(res.data.desc);
        }
        getArticle()
    }, [path])

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:8082/api/articles/${article._id}`)
          alert("Article deleted!");
          window.location.replace("/");
        } catch (err) {}
      }

    console.log("working")
    return (
        <div className="singleArt">
            
            <div className="artDesc">
            <span className="artDate">
            {new Date(article.createdAt).toDateString()}
            </span>
                <h2 className="artTitle">{article.title}
                </h2>
                <p className="artDesc">{article.description}</p>
            </div>
            <button 
                onClick={handleDelete} className="writeSubmit"
            >Delete</button>
            <a href="/" class="button">Return</a>
            </div>
    )
}
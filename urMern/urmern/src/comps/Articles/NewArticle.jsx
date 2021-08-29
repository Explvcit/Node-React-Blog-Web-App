import axios from "axios"
import { useState } from "react"
import "./NewArticle.css"

const api = axios.create({
  baseURL: 'http://localhost:8082/api/articles'
})

export default function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newArticle = {
        title,
        description,
      };
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("title", title)
        data.append("description", description)
        data.append("name", filename);
      data.append("file", file);
      newArticle.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
      }
        
      try {
        const res = await api.post("/", newArticle);
        window.location.replace("/articles/" + res.data._id);
      } catch (err) {}
    };
    return (
        <div className="new">
        <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Write a title"
            name="title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Describe your story..."
            name="description"
            type="text"
            className="writeInput writeText"
            onChange={e=>setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        
      </form>
      <a href="/" class="button">Return</a>
      </div>
    );
  }
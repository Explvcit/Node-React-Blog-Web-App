//Express server
const express = require('express')
const connectDB = require('./config/db')
var cors = require('cors');
const articleRoute = require('./routes/articles')
const multer = require("multer");
const path = require("path");
const app = express()
const router = require("express").Router()
const Article = require('./models/Article')

//Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/articles", articleRoute);

app.get('/api', (req, res) => {
    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'no articles'}))
})

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))
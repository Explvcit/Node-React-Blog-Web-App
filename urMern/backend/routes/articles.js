//INDEX PAGE API ROUTES
const router = require("express").Router();
const Article = require("../models/Article")

//CREATE ARTICLE

router.post("/", async (req, res) => {
    try {
        const newlyArticle = new Article(req.body);
        const savedArticle = await newlyArticle.save();
        res.status(200).json(savedArticle);
    } catch (err) {
        res.status(500).json(err);
    }
  })


//GET ALL ARTICLES 
router.get("/", async (req, res) => {
    try {
    let articles
    articles = await Article.find({})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//DELETE ARTICLE
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
    
      try{
        await article.delete()
        res.status(200).json("Article has been deleted")
      }
       catch (err) {
        res.status(500).json(err)
      }
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ARTICLE
router.get("/:id", async (req, res) => {
    try {
      const article = await Article.findById(req.params.id)
      res.status(200).json(article)
    } catch (err) {
      res.status(500).json(err)
    }
  });
module.exports = router
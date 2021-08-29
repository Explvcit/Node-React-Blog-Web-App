const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    categories: {
        type: Array,
        required: false
    },
},
    {timestamps: true}
)

module.exports = Article = mongoose.model('Article', ArticleSchema)
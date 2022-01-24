

const mongoose = require('mongoose')

const MoviesSchema = mongoose.Schema({
  title: {type: String, unique:true, requied:true},
  posterUrl: String,
  rate: Number,
  description: String,
  trailer: String
})

module.exports = mongoose.model('Movie', MoviesSchema)
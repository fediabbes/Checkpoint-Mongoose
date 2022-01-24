
const express= require('express')
const Movie = express.Router()
const { AddMovie, GetMovies, DeleteMovie, UpdateMovie, GetOneMovie } = require('../controllers/MoviesControllers')

//Method Post
// Req.body
Movie.post('/addMovie',AddMovie )
// console.log(AddMovie)

//Method Get
Movie.get('/', GetMovies )

//Method Delete
//req.params
Movie.delete('/:id', DeleteMovie )


// method put
// req.params / req.body
Movie.put('/:id', UpdateMovie)

//Method Get One Movie
// req.params

Movie.get('/:id', GetOneMovie )

module.exports = Movie
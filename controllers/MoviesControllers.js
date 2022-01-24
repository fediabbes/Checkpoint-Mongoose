const MovieSchema = require('../models/MovieSchema')

exports.AddMovie = async(req,res)=> {
    const {title}=req.body
    try {
        const Movie = new MovieSchema(req.body)
        
        const MovieFound = await MovieSchema.findOne({title})
        
        if (MovieFound){
            return res.status(400).send({msg:'Movie Already exists'})
        }
        await Movie.save()
        res.status(200).send({msg: 'Movie added', Movie})
    } catch (error) {
        res.status(500).send({msg: 'Your Movie is not Added', error})
    }
}

exports.GetMovies = async(req,res)=> {
    try {
        const MoviesForMap = await MovieSchema.find()
        res.status(200).send({msg: 'Your Movie List', MoviesForMap})
    } catch (error) {
        res.send(500).send({msg: 'Your Movie List Not Found', error})
    }
}

exports.DeleteMovie = async(req,res)=> {
    try {
        const MoviesforDelete = await MovieSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: 'Your Movie is Deleted', MoviesforDelete})
    } catch (error) {
        res.status(500).send({msg: 'Your Movie is not Deleted', error})
    }
}

exports.UpdateMovie =  async (req,res)=> {
    try {
        const MovieForUpdate = await MovieSchema.findByIdAndUpdate(req.params.id, {$set: {...req.body}})
        res.status(200).send({msg: 'Your Movie is Updated', MovieForUpdate})
    } catch (error) {
        res.send(500).send({msg: 'Your Movie is not Updated', error})
    }
}

exports.GetOneMovie = async (req,res)=> {
    try {
        const OneMovieForGet = await MovieSchema.findById(req.params.id)
        res.status(200).send({msg: 'Here is your Movie', OneMovieForGet})
    } catch (error) {
        res.status(500).send({msg: 'Your Movie is not Found', error})
    }
}
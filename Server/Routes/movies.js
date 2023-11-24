const express=require('express')
const router=express.Router()
const {
    allMovies,
    addMovie,
    deleteMovie,
    getMovie
} = require('../controllers/movies');

router.get("/allMovies",allMovies)
router.get("/getMovie",getMovie)
router.post("/addMovie",addMovie)
router.delete("/deleteMovie",deleteMovie)


module.exports=router
const express=require('express')
const router=express.Router()
const {
    allMovies,
    addMovie
} = require('../controllers/movies');

router.get("/allMovies",allMovies)
router.post("/addMovie",addMovie)


module.exports=router
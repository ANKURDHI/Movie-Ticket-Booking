const express=require('express')
const router=express.Router()
const {
    allMovies,
    addMovie,
    deleteMovie,
    getMovie,
    getGenre,
    getLanguage,
    getSort
} = require('../controllers/movies');

router.get("/allMovies",allMovies)
router.get("/getMovie",getMovie)
router.post("/addMovie",addMovie)
router.delete("/deleteMovie",deleteMovie)
router.get("/getGenre",getGenre)
router.get("/getLanguage",getLanguage)
router.get("/getSort",getSort)


module.exports=router
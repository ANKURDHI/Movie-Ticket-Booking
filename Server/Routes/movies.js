const express=require('express')
const router=express.Router()
const {
    allMovies,
    addMovie,
    deleteMovie,
    getMovie,
    getFilteredMovies
    // getGenre,
    // getLanguage,
    // getSort
} = require('../controllers/movies');

router.get("/allMovies",allMovies)
router.get("/getMovie/:movieId",getMovie)
router.post("/addMovie",addMovie)
router.delete("/deleteMovie",deleteMovie)
router.post("/filter",getFilteredMovies)
// router.get("/getLanguage",getLanguage)
// router.get("/getSort",getSort)


module.exports=router
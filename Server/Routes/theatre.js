const express=require('express')
const router=express.Router()
const {
    allTheatre,
    addTheatre,
    deleteTheatre,
    getTheatre
} = require('../controllers/theatre');

router.get("/allTheatre",allTheatre)
router.get("/getTheatre/:movieId/:date",getTheatre)
router.post("/addTheatre",addTheatre)
router.delete("/deleteTheatre",deleteTheatre)


module.exports=router
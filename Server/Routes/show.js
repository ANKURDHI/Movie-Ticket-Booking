const express=require('express')
const router=express.Router()
const {
    allShow,
    addShow,
    deleteShow,
    getShow
} = require('../controllers/show');

router.get("/allShow",allShow)
router.get("/getShow",getShow)
router.post("/addShow",addShow)
router.delete("/deleteShow",deleteShow)


module.exports=router
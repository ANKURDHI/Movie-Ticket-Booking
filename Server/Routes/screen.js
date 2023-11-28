const express=require('express')
const router=express.Router()
const {
    allScreen,
    addScreen,
    deleteScreen,
    getScreen
} = require('../controllers/screen');

router.get("/allScreen",allScreen)
router.get("/getScreen",getScreen)
router.post("/addScreen",addScreen)
router.delete("/deleteScreen",deleteScreen)


module.exports=router
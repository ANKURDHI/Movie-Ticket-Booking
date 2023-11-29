const express=require('express')
const router=express.Router()
const {
    allBooking,
    addBooking,
    deleteBooking,
    getBooking,
    
    
} = require('../controllers/booking');


router.get("/allBooking",allBooking)
router.get("/getBooking",getBooking)
router.post("/addBooking",addBooking)
router.delete("/deleteBooking",deleteBooking)


module.exports=router
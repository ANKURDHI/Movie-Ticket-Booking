const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    allBooking,
    addBooking,
    deleteBooking,
    getBooking,
    getBookings
    
    
} = require('../controllers/booking');


router.get("/allBooking",allBooking)
router.get("/getBooking/:showId/:screenId",verifyToken,getBooking)

router.get("/getBookings",verifyToken,getBookings)
router.post("/addBooking",addBooking)
router.delete("/deleteBooking",deleteBooking)


module.exports=router
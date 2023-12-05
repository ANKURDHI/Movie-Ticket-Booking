const express=require('express')
const router=express.Router()
const {
    getSeats,
    getSeat,
    updateSeat,
    deleteSeat,
    addSeat
} = require('../controllers/seat');

router.get("/getSeats",getSeats)
router.get("/getSeat",getSeat)
router.put("/updateSeat",updateSeat)
router.delete("/deleteSeat",deleteSeat)
router.post("/addSeat",addSeat)


module.exports=router
const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getSeats,
    getSeat,
    updateSeat,
    deleteSeat,
    addSeat
} = require('../controllers/seat');

router.get("/getSeats/:showId/:screenId",getSeats)
router.get("/getSeat",getSeat)
router.put("/bookSeat/:screenId/:showId",verifyToken,updateSeat)
router.delete("/deleteSeat",deleteSeat)
router.post("/addSeat",addSeat)


module.exports=router
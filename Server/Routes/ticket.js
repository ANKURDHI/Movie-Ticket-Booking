const express=require('express')
const router=express.Router()
const {
    allTicket,
    addTicket,
    deleteTicket,
    getTicket
    
} = require('../controllers/ticket');


router.get("/allTicket",allTicket)
router.get("/getTicket",getTicket)
router.post("/addTicket",addTicket)
router.delete("/deleteTicket",deleteTicket)


module.exports=router
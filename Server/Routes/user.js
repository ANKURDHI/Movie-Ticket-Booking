const express=require('express')
const router=express.Router()
const {
    getUser,
    updateUser
    
} = require('../controllers/users');

router.get("/getUser",getUser)
router.put("/updateUser",updateUser)


module.exports=router
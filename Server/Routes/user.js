const express=require('express')
const router=express.Router()
const {
    getUser,
    updateUser,
    deleteUser,
    getUsers
    
} = require('../controllers/users');

router.get("/getUsers",getUsers)
router.get("/getUser",getUser)
router.put("/updateUser",updateUser)
router.delete("/deleteUser",deleteUser)


module.exports=router
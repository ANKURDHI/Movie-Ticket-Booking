const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getUser,
    updateUser,
    deleteUser,
    getUsers,
    refetchUser
    
} = require('../controllers/users');

router.get("/getUsers",getUsers)
router.get("/getUser",getUser)
router.put("/updateUser",updateUser)
router.delete("/deleteUser",deleteUser)
router.get("/refetch",verifyToken,refetchUser)


module.exports=router
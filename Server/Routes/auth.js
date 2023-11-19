const express=require('express')
const router=express.Router()
const {
    register,
    login,
    logout,
    token,
} = require('../controllers/auth');

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
router.post("/token",token)

module.exports=router
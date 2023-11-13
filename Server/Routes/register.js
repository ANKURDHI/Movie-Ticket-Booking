const express= require("express");
const router=express.Router();
const mysql = require('mysql')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.db_password,
    database:process.env.db_database
    })


//get all data only for testing
router.get('/users',authenticateToken,(req,res)=>{
    const sql ="select * from Web_User";
    db.query(sql,(err,data)=>{
    if(err) return res.status(500).json(err);
   
    return res.status(201).json(data);
    })
    })

//signup a user    
router.post('/signup', async (req, res) => {
    try {
        const user= req.body.user;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const first=req.body.first_name;
        const last=req.body.last_name;
        const email=req.body.email;
        const sql ="INSERT INTO Web_user(User_ID, Password, First_Name, Last_Name, Email_ID) VALUES (?,?,?,?,?);";
        db.query(sql,[user, hashedPassword, first, last, email],(err,data)=>{
        if(err) return res.json(err);
       
        res.status(201).send()
        })
       
    } catch {
        res.status(500).send()
    }
})

//login   

  
  
function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if(token==null)return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user1)=>{
            if(err)return res.sendStatus(403)
            req.user=user1
        next()
})
}
module.exports=router;
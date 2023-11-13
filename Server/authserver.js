const express= require("express");
require('dotenv').config()
const mysql = require('mysql')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connectivity
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.db_password,
    database:process.env.db_database
    })
//When Deploying use database
let refreshTokens=[]
//api for token generation through refresh tokens
app.post('/api/token',(req,res)=>{
    const refreshToken=req.body.token
    if(refreshToken==null)return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{

if(err)return res.sendStatus(403)
const accessToken=generateAccessToken({name:user.name})
res.json({accessToken:accessToken})
})
})
//Login api
app.post('/api/login', async (req, res) => {
    const user = req.body.user;
    const sql = "SELECT * FROM Web_user WHERE User_ID = ?";
    
    db.query(sql, [user], async (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      
      
      
      if (!data || data.length === 0) {
        return res.status(400).send('Cannot find user');
      }
      
      try {
        if (data[0] && await bcrypt.compare(req.body.password, data[0].Password)) {
            const user1={name: user}
            const accessToken= generateAccessToken(user1)
            const refreshToken= jwt.sign(user1,process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            res.json({accessToken: accessToken,refreshToken: refreshToken })
        } else {
          res.send('Not Allowed');
        }
      } catch {
        res.status(500).send();
      }
    });
  });
//function that generate tokens
function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '10m'})
}

  app.listen(4000,()=>{
    console.log("listening auth");
    })
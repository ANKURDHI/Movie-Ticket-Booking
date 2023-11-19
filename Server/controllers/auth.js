const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { pool }  = require('../util/db');


let refreshTokens=[]
//api for token generation through refresh tokens
const token = (req,res)=>{
    const refreshToken=req.body.refreshToken
    if(refreshToken==null)return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{

    
    if(err)return res.sendStatus(403)
    const accessToken=generateAccessToken({name:user.name})
    res.cookie("accessToken",accessToken,{httpOnly:true}).status(200).json("New Access Token");
})
}

const register = async(req,res)=>{
    try {
        
        const user= req.body.user;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const first=req.body.first_name;
        const last=req.body.last_name;
        const email=req.body.email;
        const sql ="INSERT INTO Web_user(User_ID, Password, First_Name, Last_Name, Email_ID) VALUES (?,?,?,?,?);";
        pool.query(sql,[user, hashedPassword, first, last, email])
        res.status(201).send()
        
        
       
    } catch {
        res.status(500).send()
    }
}

const login = async (req,res)=>{
    const user = req.body.user;
    const sql = "SELECT * FROM Web_user WHERE User_ID = ?";
    
    const [data] = await pool.query(sql,[user]);  
  
      
      try {
        if (data[0] && await bcrypt.compare(req.body.password, data[0].Password)) {
            const user1={name: user}
            const accessToken= generateAccessToken(user1)
            const refreshToken= jwt.sign(user1,process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            res.cookie("accessToken",accessToken,{httpOnly:true}).status(200).json({refreshToken:refreshToken});
        } else {
          res.send('Not Allowed');
        }
      } catch {
        res.status(500).send();
      }
    };

const logout = async (req,res)=>{
    try{
        res.clearCookie("accessToken",{sameSite:"none",secure:true}).status(200).json("User logged out successfully!")
    }
    catch(err){
        res.status(500).json(err)
    }
}
function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '10m'})
}

module.exports = {
    register,
    login,
    logout,
    token,
}
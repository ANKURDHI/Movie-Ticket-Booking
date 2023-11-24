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
//signup
const register = async(req,res)=>{
    try {        
       
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const first=req.body.first_name;
        const last=req.body.last_name;
        const email=req.body.email;
        const sql ="INSERT INTO web_user( Password, First_Name, Last_Name, Email_ID) VALUES (?,?,?,?);";
        await pool.query(sql,[ hashedPassword, first, last, email])
        res.status(201).json({msg:"Created"})       
    } catch(err) {
        res.status(500).json(err)
    }
}
//login api
const login = async (req,res)=>{
    const email = req.body.email;
    
    const sql = "SELECT * FROM Web_user WHERE Email_ID = ?";   
    const [data] = await pool.query(sql,[email]);  
    try {
        if (data[0] && await bcrypt.compare(req.body.password, data[0].Password)) {
            const user1={email: email}
            const accessToken= generateAccessToken(user1)
            const refreshToken= jwt.sign(user1,process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken);
            const {Password,...others} = data[0];
            res.cookie("accessToken",accessToken,{httpOnly:true}).status(200).json({refreshToken:refreshToken,others});
        } else {
          res.staus(403).json('Not Allowed');
        }
      } catch(err){
        res.status(500).json(err);
      }
    };
//logout api
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
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
        const {first_name,last_name,email,password}=req.body;   
        let q = 'SELECT First_Name FROM web_user WHERE Email_ID=?';
        const [exists] = await pool.query(q,[email]);
        console.log(exists);
        if(exists.length!=0) return res.send("User exists");
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const sql ="INSERT INTO web_user( Password, First_Name, Last_Name, Email_ID) VALUES (?,?,?,?);";
        await pool.query(sql,[ hashedPassword, first_name, last_name, email])
        res.status(201).json({msg:"Created"})       
    } catch(err) {
        res.status(500).json(err)
    }
}
//login api
const login = async (req,res)=>{
    try{
        const email = req.body.email;
        const sql = "SELECT * FROM Web_user WHERE Email_ID = ?";   
        const [data] = await pool.query(sql,[email]);  
        if(data.length==0){
            return res.status(404).send("User not found!")
        }
        const match=await bcrypt.compare(req.body.password, data[0].Password)       
        if(!match){
            return res.status(401).json("Wrong credentials!")
        }
        const token=jwt.sign({id:data[0].User_ID},process.env.ACCESS_TOKEN_SECRET);
        const {Password,...others} = data[0];
        res.cookie("accessToken",token,{httpOnly:true}).status(200).json(others);    
    }catch(err){
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
// function generateAccessToken(user){
//     return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '10m'})
// }

module.exports = {
    register,
    login,
    logout,
    // token,
}





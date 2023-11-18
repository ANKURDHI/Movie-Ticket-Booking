const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { pool }  = require('../util/db');

const register = async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        let q = 'SELECT username FROM USERS WHERE username=?';
        const [exists] = await pool.query(q,[username]);
        if(exists.length!=0) return res.send("User exists");
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        q = 'INSERT INTO USERS(username,email,password) VALUES (?,?,?);'
        await pool.query(q,[username,email,hashedPassword]);
        res.status(200).json("User created");
    }
    catch(err){
        res.status(500).json(err)
    }
}

const login = async (req,res)=>{
    try{
        
        let q = 'SELECT * FROM USERS WHERE email=?';
        const [exists] = await pool.query(q,[req.body.email]);      
        if(exists.length==0){
            return res.status(404).send("User not found!")
        }
        const match=await bcrypt.compare(req.body.password,exists[0].password)       
        if(!match){
            return res.status(401).json("Wrong credentials!")
        }
        const token=jwt.sign({id:exists[0].uid},process.env.JWT_SECRET);
        const {password,...others} = exists[0];
        res.cookie("accessToken",token,{httpOnly:true}).status(200).json(others);
    } catch(err){
        res.status(500).json(err)
    }
}
const logout = async (req,res)=>{
    try{
        res.clearCookie("accessToken",{sameSite:"none",secure:true}).status(200).json("User logged out successfully!")
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    register,
    login,
    logout,
}
const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in");
    jwt.verify(token,process.env.JWT_SECRET,async (err,data)=>{
        if(err){
            return res.status(403).json("Token is not valid!")
        }  
        req.userData = data;        
        next()
    })
}

module.exports=verifyToken
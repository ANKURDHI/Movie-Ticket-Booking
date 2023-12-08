const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    console.log('verify')
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in");
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,async (err,data)=>{
        if(err){
            return res.status(403).json("Token is not valid!")
        }  
        console.log(data)
        req.userData = data;        
        next()
    })
}

module.exports=verifyToken
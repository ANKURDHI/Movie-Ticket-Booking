require('dotenv').config();
const express =require('express');
const app=express()
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true);
    next();
})

app.use(cors({
    origin:`${process.env.CLIENT_PORT}`,
    credentials:true
}))

const authRoute=require('./Routes/auth')
// const userRoute=require('./Routes/user')
const moviesRoute=require('./Routes/movies')
// const userRoute=require('./Routes/user')

app.use("/api/auth",authRoute)
// app.use("/api/users",userRoute)
app.use("/api/movies",moviesRoute)

app.listen(8081,()=>{
console.log("listening");
})


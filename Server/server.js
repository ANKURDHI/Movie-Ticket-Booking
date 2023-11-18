require('dotenv').config();
const express =require('express');
const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Credentials",true);
//     next();
// })

// app.use(cors({
//     origin:`${process.env.CLIENT_PORT}`,
//     credentials:true
// }))

const authRoute=require('./routes/auth')
const userRoute=require('./routes/user')

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)

app.listen(8081,()=>{
console.log("listening");
})


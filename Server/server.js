require('dotenv').config();
const express =require('express');
const app=express()
const cors = require('cors')
const multer = require('multer')
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true);
    next();
})

app.use(cors({
    origin:`${process.env.CLIENT_PORT}`,
    credentials:true
}))
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'public/Images')
    },
    filename:((req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now()+path.extname(file.originalname))
    })
})


const upload= multer({
    storage:storage
})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
})

const authRoute=require('./Routes/auth')
const theatreRoute=require('./Routes/theatre')
const moviesRoute=require('./Routes/movies')
const userRoute=require('./Routes/user')
const screenRoute=require('./Routes/screen')
const showRoute=require('./Routes/show')
const bookingRoute=require('./Routes/booking')
const ticketRoute=require('./Routes/ticket')

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/movies",moviesRoute)
app.use("/api/theatre",theatreRoute)
app.use("/api/screen",screenRoute)
app.use("/api/show",showRoute)
app.use("/api/booking",bookingRoute)
app.use("/api/ticket",ticketRoute)



app.listen(8081,()=>{
console.log("listening");
})


const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const test=require("./Routes/register")


 
app.use('/api',test);
app.use('/api/signup',test);  
// app.use('/api/login',test);      

app.listen(8081,()=>{
console.log("listening");
})


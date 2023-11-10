const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Dolphine",
    database:"db_healthcare1"
    })



app.get('/users',(req,res)=>{
    const sql ="select * from doctors";
    db.query(sql,(err,data)=>{
        console.log(err);
        console.log(data);
    if(err) return res.json(err);
   
    return res.json(data);
    })
    })
        
        
app.get('/',(req,res)=>{
return res.json("from backend");
})
app.listen(8081,()=>{
console.log("listening");
})


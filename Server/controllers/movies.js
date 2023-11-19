const { pool }  = require('../util/db');

const allMovies =  async(req,res)=>{
    const sql ="select * from Movie";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
const addMovie = async (req,res)=>{
    try {
        const Movie_ID= req.body.Movie_ID;
        const Name=req.body.Name;
        const Language=req.body.Language;
        const Genre=req.body.Genre;
        const Target_Audience=req.body.Target_Audience;
        const sql ="INSERT INTO Movie(Movie_ID, Name, Language, Genre, Target_Audience) VALUES (?,?,?,?,?);";
        pool.query(sql,[Movie_ID, Name, Language, Genre, Target_Audience],(err,data)=>{
        if(err) return res.json(err);
       
        res.status(201).send()
        })
       
    } catch {
        res.status(500).send()
    }
}


module.exports = {
    allMovies,
    addMovie
}
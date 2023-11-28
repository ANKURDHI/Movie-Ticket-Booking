const { pool }  = require('../util/db');
// get all movie data


const allMovies =  async(req,res)=>{
    const sql ="select * from Movie";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get movie
const getMovie = async (req,res)=>{
    const Name = req.body.Name;
  
    try{        
        let q='SELECT * FROM Movie WHERE Name = ?;'
        const [response] = await pool.query(q,[Name])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new movie
const addMovie = async (req, res) => {
    try {
        const { Movie_ID, Name, Language, Genre, Target_Audience,Image } = req.body;
        const sql = "INSERT INTO Movie(Movie_ID, Name, Language, Genre, Target_Audience,Mpic) VALUES (?,?,?,?,?,?);";
        
        // Convert pool.query into a Promise
        const queryPromise = new Promise((resolve, reject) => {
            pool.query(sql, [Movie_ID, Name, Language, Genre, Target_Audience,Image], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });

        // Await the Promise
        await queryPromise;

        res.status(201).json("Movie Added");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
};

//Remove Movie
const deleteMovie = async (req,res)=>{
    try{
        const q = "DELETE FROM Movie WHERE Movie_ID=?;"
        const values = [
        req.body.Movie_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Movie has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


module.exports = {
    allMovies,
    addMovie,
    deleteMovie,
    getMovie
}
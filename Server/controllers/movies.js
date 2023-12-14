const { pool }  = require('../util/db');
// get all movie data
const allMovies =  async(req,res)=>{
    const sql ="select * from Movie";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}

//getGenre
const getFilteredMovies = async (req,res)=>{    
    const {Genre,Language} = req.body;  
    try{        
        let q;
        let data;
        if(Genre && Language){
            q='SELECT * FROM Movie WHERE Genre = ? AND Language = ?;'
            const [response] = await pool.query(q,[Genre,Language]);
            data=response;
        }else if(Genre){
            q='SELECT * FROM Movie WHERE Genre = ?;';
            const [response] = await pool.query(q,[Genre])
            data=response;
        }else {
           q='SELECT * FROM Movie WHERE Language = ?;';
           const [response] = await pool.query(q,[Language])
           data=response;
        }        
        // const [response] = await pool.query(q,[Genre])
        // console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//getLanguage
// const getLanguage = async (req,res)=>{
//     const Language = req.body.Language;
  
//     try{        
//         let q='SELECT * FROM Movie WHERE Language = ?;'
//         const [response] = await pool.query(q,[Language])
//         res.status(200).json(response)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }
// //getSort
// const getSort = async (req,res)=>{
//     const Language = req.body.Language;
//     const Genre  =req.body.Genre;
  
//     try{        
//         let q='select * from Movie where Language=? or Genre=?; '
//         const [response] = await pool.query(q,[Language,Genre])
//         res.status(200).json(response)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

//get movie
const getMovie = async (req,res)=>{
    console.log('getmovie')
    const {movieId} = req.params;  
    try{        
        let q='SELECT * FROM Movie WHERE Movie_ID = ?;'
        const [response] = await pool.query(q,[movieId])
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
        const sql = "INSERT INTO Movie(Movie_ID, Name, Language, Genre, Target_Audience,Mpic) VALUES (?,?,?,?,?,?);"
        
        // Await the query directly
        const result = await pool.query(sql, [Movie_ID, Name, Language, Genre, Target_Audience,Image]);

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
    getMovie,
    getFilteredMovies
    // getGenre,
    // getLanguage,
    // getSort
}
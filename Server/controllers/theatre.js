const { pool }  = require('../util/db');

// get all Theatre data
const allTheatre =  async(req,res)=>{
    const sql ="select * from Theatre";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get Theatre
const getTheatre = async (req,res)=>{
    console.log('here')
    const {movieId,date} = req.params;  
    try{        
        let q="SELECT t.*, sh.* FROM Theatre t  JOIN Screen s ON t.Theatre_ID = s.Theatre_ID  JOIN show1 sh ON s.Screen_ID = sh.Screen_ID  JOIN Movie m ON sh.Movie_ID = m.Movie_ID  WHERE m.Movie_ID = ? AND sh.Show_Date = ?;"
        const [response] = await pool.query(q,[movieId,date])
        console.log(response)
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new Theatre
const addTheatre = async (req, res) => {
    try {
        const { Theatre_ID, Name_of_Theatre, No_of_Screens, Area } = req.body;
        const sql = "INSERT INTO Theatre (Theatre_ID, Name_of_Theatre, No_of_Screens, Area) VALUES (?,?,?,?);"
        
        // Await the query directly
        const result = await pool.query(sql, [Theatre_ID, Name_of_Theatre, No_of_Screens, Area]);

        res.status(201).json("Theatre Added");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
};


//Remove Theatre
const deleteTheatre = async (req,res)=>{
    try{
        const q = "DELETE FROM Theatre WHERE Theatre_ID=?;"
        const values = [
        req.body.Theatre_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Theatre has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


module.exports = {
    allTheatre,
    addTheatre,
    deleteTheatre,
    getTheatre
}
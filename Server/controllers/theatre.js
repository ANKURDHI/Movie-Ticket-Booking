const { pool }  = require('../util/db');

// get all Theatre data
const allTheatre =  async(req,res)=>{
    const sql ="select * from Theatre";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get Theatre
const getTheatre = async (req,res)=>{
    const Name = req.body.Name;
  
    try{        
        let q="SELECT DISTINCT t.Name_of_Theatre FROM Theatre t JOIN Screen s ON t.Theatre_ID = s.Theatre_ID JOIN show1 sh ON s.Screen_ID = sh.Screen_ID JOIN Movie m ON sh.Movie_ID = m.Movie_ID WHERE m.Name = ?;"
        const [response] = await pool.query(q,[Name])
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
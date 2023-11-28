const { pool }  = require('../util/db');

// get all Screen data
const allShow =  async(req,res)=>{
    const sql ="select * from Show1";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get Show
const getShow = async (req,res)=>{
    const Show_ID = req.body.Show_ID;
  
    try{        
        let q='SELECT * FROM Show1 WHERE Show_ID = ?;'
        const [response] = await pool.query(q,[Show_ID])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new Screen
const addShow = async (req, res) => {
    try {
        const { Show_ID, Show_Time, Show_Date, Seats_Remaining, Cost, Screen_ID, Movie_ID } = req.body;
        const sql = "INSERT INTO show1 (Show_ID, Show_Time, Show_Date, Seats_Remaining, Cost, Screen_ID, Movie_ID) VALUES (?, ?, ?, ?, ?,?,?);"
        
        // Await the query directly
        const result = await pool.query(sql, [Show_ID, Show_Time, Show_Date, Seats_Remaining, Cost, Screen_ID, Movie_ID]);

        res.status(201).json("Show Added");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
};


//Remove Show
const deleteShow = async (req,res)=>{
    try{
        const q = "DELETE FROM Show1 WHERE Show_ID=?;"
        const values = [
        req.body.Show_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Show has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


module.exports = {
    allShow,
    addShow,
    deleteShow,
    getShow
}
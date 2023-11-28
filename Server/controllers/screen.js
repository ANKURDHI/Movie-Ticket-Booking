const { pool }  = require('../util/db');

// get all Screen data
const allScreen =  async(req,res)=>{
    const sql ="select * from Screen";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get Screen
const getScreen = async (req,res)=>{
    const Theatre_ID = req.body.Theatre_ID;
  
    try{        
        let q='SELECT * FROM Screen WHERE Theatre_ID = ?;'
        const [response] = await pool.query(q,[Theatre_ID])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new Screen
const addScreen = async (req, res) => {
    try {
        const { Screen_ID, No_of_Seats, Theatre_ID } = req.body;
        const sql = "INSERT INTO Screen (Screen_ID, No_of_Seats, Theatre_ID) VALUES (?, ?, ?);"
        
        // Await the query directly
        const result = await pool.query(sql, [Screen_ID, No_of_Seats, Theatre_ID]);

        res.status(201).json("Screen Added");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
};


//Remove Screen
const deleteScreen = async (req,res)=>{
    try{
        const q = "DELETE FROM Screen WHERE Screen_ID=?;"
        const values = [
        req.body.Screen_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Screen has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


module.exports = {
    allScreen,
    addScreen,
    deleteScreen,
    getScreen
}
const { pool }  = require('../util/db');

// get all Screen Ticket
const allTicket =  async(req,res)=>{
    const sql ="select * from Ticket";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get Ticket
const getTicket = async (req,res)=>{
    const Ticket_ID = req.body.Ticket_ID;
  
    try{        
        let q='SELECT * FROM Ticket WHERE Ticket_ID = ?;'
        const [response] = await pool.query(q,[Ticket_ID])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new Ticket
const addTicket = async (req, res) => {
    try {
        const { Ticket_ID, Booking_ID, Price } = req.body;
        const sql = "INSERT INTO Ticket (Ticket_ID, Booking_ID, Price) VALUES (?,?,?);"
        
        // Await the query directly
        const result = await pool.query(sql, [Ticket_ID, Booking_ID, Price]);

        res.status(201).json("Ticket added");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
};


//Remove Ticket
const deleteTicket = async (req,res)=>{
    try{
        const q = "DELETE FROM Ticket WHERE Ticket_ID=?;"
        const values = [
        req.body.Ticket_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Ticket has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


module.exports = {
    allTicket,
    addTicket,
    deleteTicket,
    getTicket
}
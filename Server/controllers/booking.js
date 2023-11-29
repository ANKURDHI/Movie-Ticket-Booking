const { pool }  = require('../util/db');

// get all Screen data
const allBooking =  async(req,res)=>{
    const sql ="select * from Booking";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//get Booking
const getBooking = async (req,res)=>{
    const Booking_ID = req.body.Booking_ID;
  
    try{        
        let q='SELECT * FROM Booking WHERE Booking_ID = ?;'
        const [response] = await pool.query(q,[Booking_ID])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new Booking
const addBooking = async (req, res) => {
    try {
        const { Booking_ID, No_of_Tickets, Total_Cost, Card_Number, Name_on_card, User_ID, Show_ID ,seats} = req.body;
        
        // Start the transaction
        await pool.query("START TRANSACTION");

        // Insert into Booking
        await pool.query("INSERT INTO Booking (Booking_ID, No_of_Tickets, Total_Cost, Card_Number, Name_on_card, User_ID, Show_ID)  VALUES (?, ?, ?, ?, ?, ?, ?)", [Booking_ID, No_of_Tickets, Total_Cost, Card_Number, Name_on_card, User_ID, Show_ID]);

        // Update show1
        await pool.query("UPDATE show1  SET Seats_Remaining = Seats_Remaining - ?  WHERE Show_ID = ?", [seats, Show_ID]);

        // Commit the transaction
        await pool.query("COMMIT");

        res.status(201).json("Booking Done");
    } catch (err) {
        // If there is any error, rollback the transaction
        await pool.query("ROLLBACK");
        console.error(err);
        res.status(500).send();
    }
};



//Remove Booking
const deleteBooking = async (req,res)=>{
    try{
        const q = "DELETE FROM Booking WHERE Booking_ID=?;"
        const values = [
        req.body.Booking_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Booking has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


module.exports = {
    allBooking,
    addBooking,
    deleteBooking,
    getBooking
}
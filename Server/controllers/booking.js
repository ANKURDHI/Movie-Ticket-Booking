const { pool }  = require('../util/db');

// get all Screen data
const allBooking =  async(req,res)=>{
    const sql ="select * from Booking";
    const [data] = await pool.query(sql); 
       
    return res.status(201).json(data);
}
//for order
const getBookings = async (req,res)=>{
    const {id} = req.userData;
    try{        
        let q='SELECT Seats.*,Theatre.*,show1.Show_Time,show1.Show_Date, Screen.*,  Movie.* FROM Seats JOIN Screen ON Seats.Screen_ID = Screen.Screen_ID JOIN Theatre ON Screen.Theatre_ID = Theatre.Theatre_ID JOIN show1 ON Screen.Screen_ID = show1.Screen_ID JOIN Movie ON show1.Movie_ID = Movie.Movie_ID WHERE Seats.User_ID = ?;'
        const [response] = await pool.query(q,[id])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//get Booking
const getBooking = async (req,res)=>{
    const {id} = req.userData;
    const {showId,screenId} = req.params;
    try{        
        let q='SELECT Seats.*,Theatre.*,show1.Show_Time,show1.Show_Date, Screen.*,  Movie.* FROM Seats JOIN Screen ON Seats.Screen_ID = Screen.Screen_ID JOIN Theatre ON Screen.Theatre_ID = Theatre.Theatre_ID JOIN show1 ON Screen.Screen_ID = show1.Screen_ID JOIN Movie ON show1.Movie_ID = Movie.Movie_ID WHERE Seats.User_ID = ? AND Seats.status = "Booked" AND Seats.Screen_ID = ? AND show1.Show_ID = ?;'
        const [response] = await pool.query(q,[id,screenId,showId])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//for adding a new Booking
const addBooking = async (req, res) => {
    try {
        const { No_of_Tickets, Total_Cost, Card_Number, Name_on_card, User_ID, Show_ID, Seat_IDs } = req.body;
        
        // Start the transaction
        await pool.query("START TRANSACTION");

        // Insert into Booking
        const [result] = await pool.query("INSERT INTO Booking (No_of_Tickets, Total_Cost, Card_Number, Name_on_card, User_ID, Show_ID) VALUES (?, ?, ?, ?, ?, ?)", [No_of_Tickets, Total_Cost, Card_Number, Name_on_card, User_ID, Show_ID]);
        const insertId = result.insertId;

        // Update show1
        await pool.query("UPDATE show1 SET Seats_Remaining = Seats_Remaining - ? WHERE Show_ID = ?", [No_of_Tickets, Show_ID]);

        // Iterate over each Seat_ID
        for(let i = 0; i < Seat_IDs.length; i++) {
            // Select the seat for update, locking the row
            const [seat] = await pool.query("SELECT * FROM Seats WHERE Seat_ID = ? FOR UPDATE", [Seat_IDs[i]]);
                
            // Check if the seat is already booked
            if(seat.status === 'Booked') {
                throw new Error(`Seat ${Seat_IDs[i]} is already booked`);
            }

            // If the seat is not booked, update the status to 'Booked'
            await pool.query("UPDATE Seats SET status = 'Booked' WHERE Seat_ID = ?", [Seat_IDs[i]]);
        }

        // Insert into Ticket
        for(let i = 0; i < No_of_Tickets; i++) {
            await pool.query("INSERT INTO Ticket (Booking_ID, Price) VALUES (?, ?)", [insertId, Total_Cost/No_of_Tickets]);
        }

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
    getBooking,
    getBookings
}
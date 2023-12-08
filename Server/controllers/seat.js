const {pool} = require('../util/db')
//specific seat information
const getSeat = async (req,res)=>{
    const SeatID = req.body.Seat_ID;
  
    try{        
        let q='SELECT * FROM Seats WHERE Seat_ID = ?;'
        const [response] = await pool.query(q,[SeatID])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//get all seats
const getSeats = async (req,res)=>{
    const {screenId,showId} = req.params
    try{        
        let q='SELECT * FROM Seats WHERE Screen_ID=? AND Show_ID=?;'
        const [response] = await pool.query(q,[screenId,showId]);
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}

// update a seat information 
const updateSeat = async (req,res)=>{  
    const {id} = req.userData;
    const {seatIds}=req.body;
    const {screenId,showId} = req.params; 
    try{
        const placeholders = Array(seatIds.length).fill('?').join(', ');

        const q = `UPDATE Seats SET User_ID=?, status='Booked' WHERE Seat_ID IN (${placeholders}) AND Show_ID=? AND Screen_ID=?;`;
        const values = [
        id,
        ...seatIds, // Spread the seatIds array to provide individual values
        showId,
        screenId
        ];
        await pool.query(q, values);      
        res.status(200).json("Seat has been edited");
    }
    catch(err){        
        res.status(500).json(err)
    }
}
//remove a seat
const deleteSeat = async (req,res)=>{
    try{
        const q = "DELETE FROM Seats WHERE Seat_ID=?;"
        const values = [
        req.body.Seat_ID
        ];
        await pool.query(q, values);
        res.status(200).json("Seat has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}


//for adding a new seat
const addSeat = async (req, res) => {
    try {
        const { Seat_ID, User_ID, price, Screen_ID, status } = req.body;
        const sql = "INSERT INTO Seats(Seat_ID, User_ID, price, Screen_ID, status) VALUES (?,?,?,?,?);"
        
        // Await the query directly
        const result = await pool.query(sql, [Seat_ID, User_ID, price, Screen_ID, status]);

        res.status(201).json("Seat Added");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
};

module.exports={
    getSeats,
    getSeat,
    // refetchUser,
    updateSeat,
    deleteSeat,
    addSeat
}
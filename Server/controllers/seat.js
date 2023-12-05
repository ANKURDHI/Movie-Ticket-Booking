const {pool} = require('../util/db')
//specific seat information
const getSeat = async (req,res)=>{
    const SeatID = req.body.Seat_ID;
  
    try{        
        let q='SELECT * FROM Seats WHERE Seat_ID = ?;'
        const [response] = await pool.query(q,[SeatID])
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//get all seats
const getSeats = async (req,res)=>{
    try{        
        let q='SELECT * FROM Seats;'
        const [response] = await pool.query(q);
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}

// update a seat information 
const updateSeat = async (req,res)=>{   
    try{
        const q = "UPDATE Seats SET Seat_ID=?, User_ID=?, price=?, Screen_ID=?, status=? WHERE Seat_ID=?;";
        const values = [
            req.body.Seat_ID,
            req.body.User_ID,
            req.body.price,
            req.body.Screen_ID,
            req.body.status,
            req.body.Seat_ID
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
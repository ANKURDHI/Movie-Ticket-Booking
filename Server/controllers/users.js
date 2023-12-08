const {pool} = require('../util/db')
//specific user information
const getUser = async (req,res)=>{
    const userId = req.body.Email_ID;
  
    try{        
        let q='SELECT * FROM Web_user WHERE Email_ID = ?;'
        const [response] = await pool.query(q,[userId])
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//get all users
const getUsers = async (req,res)=>{
    try{        
        let q='SELECT * FROM Web_user;'
        const [response] = await pool.query(q);
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const refetchUser = async(req,res) => {
    console.log('abc')
    const {id} = req.userData;
    try{        
        let q='SELECT * FROM Web_user WHERE User_ID=?;'
        const [response] = await pool.query(q,[id])
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}
// update a user information ##check again
const updateUser = async (req,res)=>{   
    try{
        const q = "UPDATE Web_user SET User_ID=?, First_Name=?, Last_Name=?, Email_ID=? WHERE Email_ID=?;";
        const values = [
            req.body.First_Name,
            req.body.Last_Name,
            req.body.Email_ID,
            req.body.Email_ID
        ];
        await pool.query(q, values);      
        res.status(200).json("User has been edited");
    }
    catch(err){        
        res.status(500).json(err)
    }
}
//remove a user
const deleteUser = async (req,res)=>{
    try{
        const q = "DELETE FROM Web_user WHERE Email_ID=?;"
        const values = [
        req.body.Email_ID
        ];
        await pool.query(q, values);
        res.status(200).json("User has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}

module.exports={
    getUsers,
    getUser,
    refetchUser,
    updateUser,
    deleteUser
}
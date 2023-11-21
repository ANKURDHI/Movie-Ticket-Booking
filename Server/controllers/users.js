const {pool} = require('../util/db')

const getUser = async (req,res)=>{
    const userId = req.body.userId;
  
    try{        
        let q='SELECT * FROM Web_user WHERE User_ID = ?;'
        const [response] = await pool.query(q,[userId])
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}

// const getUsers = async (req,res)=>{
//     try{        
//         let q='SELECT uid, username, email,profilePic FROM users;'
//         const [response] = await pool.query(q);
//         let newData = response.filter((user)=>{
//             return user.uid != req.userData.id;
//         })
//         res.status(200).json(newData)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

// const refetchUser = async(req,res) => {
//     const {id} = req.userData;
//     try{        
//         let q='SELECT * FROM users WHERE users.uid=?;'
//         const [response] = await pool.query(q,[id])
//         const {password,...others} = response[0]
//         res.status(200).json(others)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

const updateUser = async (req,res)=>{   
    try{
        const q = "UPDATE Web_user SET User_ID=?, First_Name=?, Last_Name=?, Email_ID=? WHERE User_ID=?;";
        const values = [
            req.body.User_ID,
            req.body.First_Name,
            req.body.Last_Name,
            req.body.Email_ID,
            req.body.User_ID
        ];
        await pool.query(q, values);      
        res.status(200).json("User has been edited");
    }
    catch(err){        
        res.status(500).json(err)
    }
}

const deleteUser = async (req,res)=>{
    try{
        const q = "DELETE FROM users WHERE users.uid=?;"
        const values = [
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("User has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}

module.exports={
    // getUsers,
    getUser,
    // refetchUser,
    updateUser,
    deleteUser
}
const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Attempt to get a connection from the pool
pool.getConnection()
  .then(connection => {
    console.log('Connected to the database!');
    // Release the connection back to the pool
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error.message);
  });

module.exports = {
  pool
};

// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection pool (use your own database details here)
const pool = mysql.createPool({
  host: 'localhost',    // Your database host
  user: 'root',         // Your database username
  password: 'password', // Your database password
  database: 'mydb'      // Your database name
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Successfully connected to the database');
    connection.release(); // Release the connection back to the pool
  }
});

module.exports = pool; // You can export the pool to use in other files

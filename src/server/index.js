const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

// Create a pool of connections to the MySQL database
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'user_credentials' // Your MySQL database name
});

// Function to execute queries
async function executeQuery(sql, values) {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(sql, values);
        connection.release();
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}

// Middleware for parsing request body
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
    Headers: [{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }]
}));

// User registration route
app.post('/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        // Execute the INSERT query
        await executeQuery('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstname, lastname, email, password]);
        console.log('User registered successfully');
        res.status(200).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ error: 'An error occurred while registering user' });
    }
});

// User login route
app.post('/login', async (req, res) => {
    const {email, password } = req.body;

    try {
        // Execute the SELECT query
        const rows = await executeQuery('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        if (rows.length > 0) {
            console.log('User logged in successfully');
            res.status(200).send({ message: 'User logged in successfully', user: rows[0] });
        } else {
            res.status(401).send({ error: 'Wrong username/password combination' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ error: 'An error occurred while logging in' });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

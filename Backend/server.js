const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");

const studentRoute = require('./Route/StudentRoute');
const facultyRoute = require('./Route/FacultyRoute');
const alumniRoute = require('./Route/AlumniRoute');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/student",studentRoute );
app.use("/faculty",facultyRoute );
app.use("/alumni",alumniRoute );

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your origin
    methods: ['GET', 'POST'],     // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only Content-Type header
  };
app.use(cors(corsOptions));



const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://0.0.0.0/Feedback_Form"
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect MongoDB", error);
    }
};
connectDB();


// allowed username and password
const allowedUsername = 'adminaccess';
const allowedPassword = 'admin@svce';

// Login Endpoint
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check
        if (username === allowedUsername && password === allowedPassword) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const connectDB = require('./config/db');// mongoDB connection
require('dotenv').config(); // load env file







// DB connection call
connectDB()

const PORT = process.env.PORT || 5001;

app.listen(PORT,
    console.log(`server is running on ${PORT}`)
)
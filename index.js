const express = require('express');
const connectDB = require('./config/db');
const app = express();
// mongoDB connection


// DB connection call
connectDB()

const PORT = process.env.PORT || 5001;

app.listen(PORT,
    console.log('server is running on')
)
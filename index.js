const express = require('express');
const app = express();
const connectDB = require('./config/db');// mongoDB connection
require('dotenv').config(); // load env file
const userRoutes = require('./routes/user.route')

//body parser middleware (to accept JSON data)
app.use(express.json())



// route register
app.use('api/user',userRoutes)




// DB connection call
connectDB()

const PORT = process.env.PORT || 5001;

app.listen(PORT,
    console.log(`server is running on ${PORT}`)
)
const mongoose = require('mongoose')

const connectDB = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected:${conn.connection.host}`)

    } catch (error) {
        console.error(`Erroe Connecting to MongoDb:${error.message}`)
        process.exit(1);

    }
}


module.exports = connectDB;
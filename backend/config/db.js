require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongo DB connection working")
    } catch (error) {
        console.error("Database connection erro")
        process.exit(1)
    }
}

module.exports = connectDB
const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://admin:Chaitanya127@cluster0.3krdkpb.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("db connected")
    }
    catch(error){
        console.log("MongoDB connection failed", error.message)
        process.exit()
    };
}

module.exports = connectDB
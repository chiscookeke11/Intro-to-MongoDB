

import mongoose from "mongoose";



 connectDB  =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDb atlas connected successfully!")
    }
    catch (error) {
        console.error("MongoDB connection failed", error)
        process.exit(1)
    }
};

module.exports = connectDB;
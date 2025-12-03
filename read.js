import mongoose from "mongoose";
import { userSchema } from "./schema/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URL;

// Create Model
const User = mongoose.model("User", userSchema);

// CONNECT AND READ
mongoose
  .connect(connectionString)
  .then(async () => {
    console.log("Connected to MongoDB");

    const studentData = await User.find();
    // const studentData = await User.findOne({email: "john@gmail.com"})
    // const studentData = await User.findOne({ age: 23 })

    console.log(studentData);

  })
  .catch((err) => console.log("DB Error:", err));




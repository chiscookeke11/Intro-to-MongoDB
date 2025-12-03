import mongoose from "mongoose";
import { userSchema } from "./schema/userSchema.js";
import dotenv from "dotenv";


dotenv.config();

const connectionString = process.env.MONGO_URL


// Create Model
const User = mongoose.model("User", userSchema);

// Connect to mongoDB
mongoose.connect(connectionString)   // Path to MongoDB URI in our .env file
  .then(() => {
    console.log("Connected to MongoDB");


    User.create({
      name: "John",
      email: "john@gmail.com",
      age: 25
    },
    {
      name: "Nedu",
      email: "Nedugmail.com",
      age: 25
    }

  ).then(() => console.log("User added"));
  })
  .catch(err => console.log("DB Error: ", err));








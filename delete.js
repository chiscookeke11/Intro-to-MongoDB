import mongoose from "mongoose";
import { userSchema } from "./schema/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URL;

// Create Model
const User = mongoose.model("User", userSchema);

// CONNECT AND DELETE
mongoose
  .connect(connectionString)
  .then(async () => {
    console.log("Connected to MongoDB");

    // DELETE OPERATION
    // Delete a single user by email
    //    const deleteResult = await User.deleteOne({ email: "john@gmail.com" });

    //    Delete all users with the same email
    const deleteResult = await User.deleteMany({ email: "john@gmail.com" });


    console.log("Delete Result:", deleteResult);

  })
  .catch((err) => console.log("DB Error:", err));

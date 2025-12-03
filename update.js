import mongoose from "mongoose";
import { userSchema } from "./schema/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URL;

// Create Model
const User = mongoose.model("User", userSchema);

// CONNECT AND UPDATE
mongoose
  .connect(connectionString)
  .then(async () => {
    console.log("Connected to MongoDB");

    //  UPDATE OPERATION
    // Example: Update user with a specific email
    const updatedUser = await User.updateOne(
      { email: "john@gmail.com" },       // Filter: which user?
      { $set: { age: 30 } }              // Update: what to change?
    );

    console.log("Updated User!");
  })
  .catch((err) => console.log("DB Error:", err));

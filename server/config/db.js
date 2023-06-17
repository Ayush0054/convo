import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MONGO DB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    // process.exit();
  }
};

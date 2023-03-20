import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connec = await mongoose.connect("mongodb://localhost:27017/chatDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connec = await mongoose.connect(
      "mongodb+srv://ayush0054:ayush0054@convo.eds8kdv.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit();
  }
};

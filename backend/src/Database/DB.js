import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

  } catch (error) {
    console.log("Error in conncetion", error);
  }
}
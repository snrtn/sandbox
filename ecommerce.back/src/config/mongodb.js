import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoConfigProduct = {
  uri: process.env.MONGO_PRODUCT,
};

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(mongoConfigProduct.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
    });
    console.log("Successfully connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export { connectMongoDB };

import express from "express";
import product from "./routes/product.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

const mongoProduct = await connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", product(mongoProduct));

export default app;

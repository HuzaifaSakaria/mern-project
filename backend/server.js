// we can also use const exress = require("express"), but we will use ES version
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRouter)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}
app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT)
});



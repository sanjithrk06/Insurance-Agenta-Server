import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middlewares
app.use(express.json());

app.use("/api", router);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port", PORT);
});

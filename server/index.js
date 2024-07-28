import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import cors from "cors";
import userRoutes from "./routes/user.js";
import sellProductRoutes from "./routes/sell-product.js";
import buyProductRoutes from "./routes/buy-product.js";

const app = express();
app.use(cors());
mongoose.connect(String(process.env.MONGO_URI)).then(()=>console.log("database started...")).then(()=>{
    app.listen(process.env.SERVER_PORT,()=>console.log("Server started ..."));
})

app.use(express.json());
app.use("/api/users/",userRoutes);
app.use("/api/sell-products",sellProductRoutes);
app.use("/api/buy-products",buyProductRoutes);


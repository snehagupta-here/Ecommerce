//username : snehagupta7385 password : IUoYRn4ZKS9XF90Z
import express from "express";
import cors from "cors";
import connectToDB from "./config/mongodb.js";
import dotenv from 'dotenv';
import connectToCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
connectToDB();
connectToCloudinary();
app.use(cors());
app.use(express.json()); 

//api endpoints
app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.listen(port,()=>{
    console.log("app is listening to port " + port);
})
app.get('/',(req,res)=>{
    res.send("hi everyone");
})
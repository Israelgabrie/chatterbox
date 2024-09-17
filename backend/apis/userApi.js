const express = require("express")
const userRouter = express.Router();

userRouter.post("/add",(req,res)=>{
    const {name,email,password} = req.body;
})
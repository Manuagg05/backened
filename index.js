require('dotenv').config()
const express = require("express")
const app = express()
app.get('/',(req,res)=>{
res.send("helllo everyone")
})
app.listen(process.env.PORT,()=>{
    console.log(`servering running on ${process.env.PORT}`)
})
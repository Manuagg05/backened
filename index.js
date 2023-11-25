require('dotenv').config()
const express = require("express")
const app = express()
const githubData = {
    "manu":"aggarwal",
    "kirti":"aggarwal",
    "anju":"agg"
}
app.get('/',(req,res)=>{
res.send("helllo everyone")
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`servering running on ${process.env.PORT}`)
})
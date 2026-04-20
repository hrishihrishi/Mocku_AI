const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const AIrouter = require("./routes/AIroutes")
const cors = require("cors");

app.use(express.json())
app.use(cors())

app.use("/api", AIrouter)

app.get('/hi', (req, res)=>{
    res.status(200).json({ message: "hi"})
})

app.listen(process.env.PORT, ()=>{
    console.log('server running whoo hoo')
})
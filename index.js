const express= require("express")
const app = express()
app.use(express.json())
const router = require("express").Router()
const rover = require("./marsRover")
router.post('/marsRover',rover.getMarsRover)
app.use(router)
const PORT=3000;
app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)})
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const pool = require('./config/db')
const studentRouter = require('./routes/students')

dotenv.config()
const app = express()
//middleware
app.use(morgan('dev'))
app.use(express.json())
//check routes
app.use('/api/v1/student', studentRouter)
app.get('/check', (req, res)=>{
    res.status(200).json({message: "Working fine"})
})
//conditionally listen
pool.query('SELECT 1').then(()=>{
    // mysql 
    console.log("MYSQL database connected")
    //listen
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
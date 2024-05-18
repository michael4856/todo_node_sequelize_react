const express = require('express')
const routes = require('./routes/todoRoute')
const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.get('/',(req,res)=> res.send("hey there you doing good?"))
app.listen(5000, ()=>{console.log("server is running on port 5000")})

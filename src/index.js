const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
const userRoutes = require('./routes/users')

app.use("/users", userRoutes)

app.listen(3000, ()=> {
    console.log("escutando na porta 3000");
})
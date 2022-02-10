const express = require('express')
const routes = express.Router();
const controller = require('../controllers/users') 

routes.get("/", controller.getAllUsers)
routes.post("/", controller.createUser)


module.exports = routes
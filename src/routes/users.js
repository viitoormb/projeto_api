const express = require('express')
const routes = express.Router();
const controller = require('../controllers/users') 

routes.get("/", controller.getAllUsers)
routes.post("/", controller.createUser)
//Teste - routes.get("/life", )

module.exports = routes
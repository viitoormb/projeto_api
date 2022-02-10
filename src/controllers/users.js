const get_all_users_service = require('../services/users/get_all_users')

function getAllUsers(req, res) {
    const usuarioAutenticado = true
    
    if (!usuarioAutenticado){
        res.status(401).send("Unauthorized")
    }

    const response = get_all_users_service()
    res.json(response)
}

function createUser(req, res) {
    res.send("Teste de Request")
}

module.exports = {
    getAllUsers,
    createUser
}
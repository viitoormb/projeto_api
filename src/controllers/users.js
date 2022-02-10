const get_all_users_service = require('../services/users/get_all_users')

function getAllUsers(req, res) {
    const usuarioAutenticado = false
    
    if (!usuarioAutenticado){
        res.status(401).send("Unauthorized")
    }

    const response = get_all_users_service()
    res.json(response)
}

module.exports = {
    getAllUsers,
    createUser
}
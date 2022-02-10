let database = [
    {
        user_id: 1,
        name: "teste",
        sobrenome: "da silva",
        idade: 18
    },
    {
        user_id: 2,
        name: "teste 2",
        sobrenome: "de souza",
        idade: 20
    },
    {   
        user_id: 3,
        name: "teste 3",
        sobrenome: "do teste",
        idade: 16
    },
    {   
        user_id: 4,
        name: "Mateus",
        sobrenome: "Bezerra",
        idade: 15
    }
]

function find_users() {
    return database
}

function create_user(user) {
    database.push(user)
}

module.exports = {
    find_users
}
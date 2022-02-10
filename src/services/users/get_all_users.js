const model = require('./../../models/users')


function getAllUsersService() {
    const users = model.find_users()
    let response = [];

    for (const user of users) {
      const usuarioMaior = user.idade >= 18;

      response.push({
        ...user,
        maior: usuarioMaior
      })
    }

    return response;
}

module.exports = getAllUsersService

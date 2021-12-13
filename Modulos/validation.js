function isValidUser(users) {
    return users.name != "" && users.surname != "";
}

exports.isValidUser = isValidUser;
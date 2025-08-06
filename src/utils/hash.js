const bcrypt = require('bcrypt')

const saltRound = 12
const hashPasssword  =  async (plainPassword) => {
    return bcrypt.hash(plainPassword, saltRound)
}

const comparePassword = async(plainPassword, hashPasssword) => {
    return await bcrypt.compare(plainPassword, hashPasssword)
}

module.exports = {
    hashPasssword,
    comparePassword
}
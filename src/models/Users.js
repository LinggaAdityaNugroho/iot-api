const db = require("../config/Database");

const getAllUsers = () => {
  const sql = "SELECT * FROM data_user";
  return db.execute(sql)
};

const createUsers = async (username, password) => {
  const sql = "INSERT INTO data_user (username, password) VALUES (?,?) "
  const result = await db.query(sql, [username, password])
  return result
}

const loginUsers = async (username) => {
  const sql = "SELECT * FROM data_user WHERE username = ?"
  const [result] = await db.query(sql, [username])
  return result[0]
}

const editPassword = async (username, password) => {
  const sql = "UPDATE data_user SET password = ? WHERE username = ?"
  const result = await db.query(sql, [password, username])
  return result
}

const deleteUsers = async (id) => {
  const sql = "DELETE FROM data_user WHERE id = ?"
  const [result] = await db.query(sql, [id])
  return result
}

module.exports = {
  getAllUsers,
  createUsers,
  loginUsers,
  editPassword,
  deleteUsers
}

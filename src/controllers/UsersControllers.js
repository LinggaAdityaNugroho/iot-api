const userModel = require('../models/Users')
const {hashPasssword, comparePassword} = require('../utils/hash')

    const getAllUsers = async (req, res) => {
        const [data] = await userModel.getAllUsers();

        res.json({
            message: 'Get all user data',
            data: data
        })
    }

    const loginUsers = async (req, res) => {
        const {username, password} = req.body

        try {
            const findUsername = await userModel.loginUsers(username)
            const compareLogin = await comparePassword(password, findUsername.username)

            res.status(201).json({
                message: 'Berhasil login',
                data: {
                    username : findUsername,
                    password : compareLogin
                }
            })
        } catch (error) {
            res.status(500).json({ message: "Error server", error: err.message });       
        }
    }

    const addUsers = async (req, res) => {
        const {username, password} = req.body;
        try {
            const hashedPassword = await hashPasssword(password)
            const result = await userModel.createUsers(username, hashedPassword);
            
            res.status(201).json({
                message: 'Add user successfully',
                data: {
                    id : result.insertId,
                    username : username,
                    password : password
                }
            })
        } catch (error) {
            res.status(500).json({message: "error", error: error.message})
        
        }  
    }

    const updateUsers = async (req, res) => {
        const {username, password} = req.body
        try {
            const hashedPassword = await hashPasssword(password)
            const result = await userModel.editPassword(username, hashedPassword)

            res.status(201).json({
                message: "Change password successfully",
                data : {
                    id : result.id,
                    username: username,
                    password: hashedPassword
                }
            })
        } catch (error) {
            res.status(500).json({message: "error", error: error.message})
        }
    }

    const deleteUsers = async (req, res) => {
        const id = req.query.id
        try {
            const result  = await userModel.deleteUsers(id)
            if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(201).json({
                    message: "User deleted"
                })
        } catch (error) {
            res.status(500).json({message: "error", error: error.message})
        }
    }


module.exports = {
    getAllUsers,
    addUsers,
    loginUsers,
    updateUsers,
    deleteUsers
}
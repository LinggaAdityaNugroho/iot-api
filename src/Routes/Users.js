const express = require('express')
const router = express.Router()
const userController = require('../controllers/UsersControllers')

router.get('/read-user', userController.getAllUsers)
router.post('/add-user', userController.addUsers)
router.post('/login', userController.loginUsers)
router.post('/change-password', userController.updateUsers)
router.delete('/delete-user', userController.deleteUsers)

module.exports = router;
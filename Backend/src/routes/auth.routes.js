const express = require('express')
const authRouter = express.Router()
const dotenv = require('dotenv')
dotenv.config()

const { registerUser, loginUser } = require('../controller/auth.controller.js')

// TEST ROUTE
authRouter.get("/", (req, res) => {
    res.send("Auth route working")
})

// REGISTER
authRouter.post('/register', registerUser)

// LOGIN
authRouter.post('/login', loginUser)

module.exports = authRouter
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/auth.model")
const dotenv = require('dotenv')
dotenv.config()
// REGISTER
async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({ message: "User registered successfully" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

// LOGIN
async function loginUser(req, res) {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.json({ token })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = { registerUser, loginUser }
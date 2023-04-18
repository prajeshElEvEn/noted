const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register user & get token
// @route   POST /api/users/login
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body

    if (!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please fill out all fields')
    }

    const userExists = await User.findOne({ email })

})

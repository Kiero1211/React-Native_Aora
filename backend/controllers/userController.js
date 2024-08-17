const User = require("../models/User.js");
const asyncHandler = require("../middlewares/asyncHandler.js");
const { hashPassword, comparePassword } = require("../utils/hashPassword.js");

exports.createUser = asyncHandler(async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;
    const existedUser = await User.findOne({email});

    if (existedUser) {
        throw new Error("User already existed");
    }
    const hashedPassword = await hashPassword(password);

    try {
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(200).json({
            username: newUser.username,
            email: newUser.email,
        });
    } catch (error) {
        throw new Error(error.message);
    }
});

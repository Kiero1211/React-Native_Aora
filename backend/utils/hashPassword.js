const bcyrpt = require("bcryptjs");

const saltRounds = 10;

const hashPassword = async (password) => {
    const salt = await bcyrpt.genSalt(saltRounds);
    const hashedPassword = await bcyrpt.hash(password, salt)
    return hashedPassword;
}

const comparePassword = async (plain, hash) => {
    return await bcyrpt.compare(plain, hash);
}

module.exports = {
    hashPassword,
    comparePassword
};
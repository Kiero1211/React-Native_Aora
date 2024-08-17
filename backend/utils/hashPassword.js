import bcyrpt from "bcryptjs";

const saltRounds = 10;

export const hashPassword = async (password) => {
    const salt = await bcyrpt.genSalt(saltRounds);
    const hashedPassword = await bcyrpt.hash(password, salt)
    return hashedPassword;
}

export const comparePassword = async (plain, hash) => {
    return await bcyrpt.compare(plain, hash);
}
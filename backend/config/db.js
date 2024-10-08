const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log(`[Error] ${error.message}`);
        process.exit(1);
    }
}

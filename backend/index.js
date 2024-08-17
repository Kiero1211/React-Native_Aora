const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");
const routes = require("./routes/index.js");

dotenv.config();

// Utils

// Initialize
const port = process.env.PORT || 5000;
const app = express();
const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname + "/uploads")));

connectDB();

// Config middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
// Pre config every cookie
app.use(function (req, res, next) {
    const oldCookie = res.cookie;
    res.cookie = function (name, value, options) {
        return oldCookie.call(this, name, value, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            ...options // merge with any options provided when 'cookie' was called
        });
    };
    next();
});

app.use(routes);

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));

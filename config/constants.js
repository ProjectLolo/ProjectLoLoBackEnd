require("dotenv").config();

module.exports = {
    SALT_ROUNDS: 10,
    PORT: process.env.PORT || 5000,
    BACKEND_API: process.env.BACKEND_API || "http://localhost:5000",
    MONGODB: process.env.MONGODB
};

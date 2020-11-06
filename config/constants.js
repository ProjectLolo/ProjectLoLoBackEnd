require("dotenv").config();

module.exports = {
  SALT_ROUNDS: 10,
  PORT: process.env.PORT || 5000,
  BACKEND_API: process.env.BACKEND_API || "http://localhost:5000",
  MONGODB: process.env.MONGODB,
  SECRET_KEY: process.env.SECRET_KEY || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m",
  SECRET_CODE: process.env.SECRET_CODE,
};

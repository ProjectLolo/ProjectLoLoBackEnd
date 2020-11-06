const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/constants");

function toJWT(data) {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { toJWT, toData };

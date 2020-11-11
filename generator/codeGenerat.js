const { SECRET_CODE } = require("../config/constants");

module.exports = {
  generated: (num) => {
    let values = SECRET_CODE;
    let password = "";
    for (let i = 0; i < num; i++) {
      password =
        password +
        values.charAt(
          Math.floor(Math.random() * Math.floor(values.length - 1))
        );
    }

    return password;
  },
};

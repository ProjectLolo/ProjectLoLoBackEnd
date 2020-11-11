const Kid = require("../models/Kid");

const generated = async (num) => {
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < num; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  return password;

  //   To prevent the same code to be generated twice, but innefficient as the DB grows
  //   const codeExists = await Kid.find({ code: password });
  //   if (codeExists[0]) {
  //     generated(num);
  //   } else {
  //     return password;
  //   }
};

module.exports = { generated };

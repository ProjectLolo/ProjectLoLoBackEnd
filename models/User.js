const { model, Schema } = require("mongoose");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name must not be empty"],
    },
    lastName: String,
    nickName: String,
    password: String,
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Name must not be empty"],
      validate: {
        validator: (email) => emailRegex.test(email),
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    profilePic: {
      type: String,
    },
    nickName: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);

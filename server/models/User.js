const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
require("dotenv").config();

const UserSchema = new Schema({
  name: {
    type: "string",
    required: [true, "Please enter your name "],
  },
  email: {
    type: "string",
    required: [true, "Please enter an email"],
    unique: [true, "User Already exists"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
      type: "string",
      required: [true, "Please enter a password"],
      minLength:[8, "The password must be at least 8 characters"]
  },
  roomNumber: {
      type: "number",
  }
});

module.exports = User = mongoose.model('user',UserSchema);

const User = require("../models/User");
require("dotenv").config();

module.exports.signup = async (req, res) => {
  try {
    const { name, rollno, email, password } = req.body;
    const newUser = new User({ name, email, password, rollno });
    await newUser.save();
    const token = await newUser.generateAuthToken();
    console.log(req.body);
    res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.getCredentials(email, password);
    const token = await user.generateAuthToken();
    return res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token !== req.token);
    await req.user.save();

    res.status(200).send({ msg: "User logged out" });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports.getuser = async (req, res) => {
  try {
  } catch (err) {}
};

const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const admin = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
      admin:true,
    });
    if (!user) {
      res.status(403).send({ msg: "This needs admin access" });
    }

    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    res.send({ msg: "This needs admin access" });
  }
};

module.exports = admin;

const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    // console.log(req.body.headers.Authorization)
    const token = req.body.headers.Authorization.replace("Bearer ", "");
    console.log(token);
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      res.status(403).send({ msg: "Authorization failed" });
    }

    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    res.status(403).send({ msg: "Authorization Failed" });
  }
};

module.exports = auth;

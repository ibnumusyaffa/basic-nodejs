const User = require("../models/user")
exports.list = async (req, res, next) => {
  try {
    let user = await User.query();
    return res.send({ message: "hallo", user });
  } catch (error) {
    next(error);
  }
};

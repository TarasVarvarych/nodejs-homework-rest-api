const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.json({ message: "Logout success" });
};

module.exports = { logout: ctrlWrapper(logout) };

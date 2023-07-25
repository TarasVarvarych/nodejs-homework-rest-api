const { register } = require("./register");
const { getCurrent } = require("./getCurrent");
const { login } = require("./login");
const { logout } = require("./logout");
const { updateAvatar } = require("./updateAvatar");
const { updateSubscription } = require("./updateSubscription");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  updateSubscription,
};

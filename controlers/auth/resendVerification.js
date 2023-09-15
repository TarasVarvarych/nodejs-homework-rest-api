const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");
require("dotenv").config();
const { BASE_URL } = process.env;
const resendVerification = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click here to verify</a>`,
  };

  await sendEmail(verifyEmail);
  res.json({ message: "Verification email sent" });
};
module.exports = {
  resendVerification: ctrlWrapper(resendVerification),
};

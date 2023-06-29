const fs = require("fs/promises");
const Jimp = require("jimp");
const path = require("path");
const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const img = await Jimp.read(tempUpload);
  img.resize(250, 250);
  await img.writeAsync(tempUpload);
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};

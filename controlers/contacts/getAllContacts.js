const { ctrlWrapper } = require("../../helpers");
const { Contact } = require("../../models");

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  res.json(data);
};

module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };

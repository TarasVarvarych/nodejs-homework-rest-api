const { HttpError, ctrlWrapper } = require("../../helpers");
const { Contact } = require("../../models");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

module.exports = {
  updateContact: ctrlWrapper(updateContact),
};

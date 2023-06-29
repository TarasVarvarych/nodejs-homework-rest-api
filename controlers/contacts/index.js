const { addOneContact } = require("./addOneContact");
const { deleteContact } = require("./deleteContact");
const { getAllContacts } = require("./getAllContacts");
const { getOneContactById } = require("./getOneContactById");
const { updateContact } = require("./updateContact");
const { updateFavoriteContact } = require("./updateFavoriteContact");

module.exports = {
  addOneContact,
  deleteContact,
  getAllContacts,
  getOneContactById,
  updateContact,
  updateFavoriteContact,
};

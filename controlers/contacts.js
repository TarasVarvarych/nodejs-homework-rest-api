const { Contact } = require("../models/contact");
const { ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res, next) => {
  const data = await Contact.find();
  res.json(data);
};

const getOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  res.json(data);
};

const addOneContact = async (req, res, next) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndDelete(contactId);

  res.json(data);
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  res.json(data);
};

const updateFavoriteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  res.json(data);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContactById: ctrlWrapper(getOneContactById),
  addOneContact: ctrlWrapper(addOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavoriteContact: ctrlWrapper(updateFavoriteContact),
};

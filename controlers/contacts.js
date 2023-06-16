// const Joi = require("joi");

const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

// const contactShema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().pattern().required(),
// });

const getAllContacts = async (req, res, next) => {
  const data = await Contact.find();
  res.json(data);
};

const getOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

const addOneContact = async (req, res, next) => {
  // const { error } = contactShema.validate(req.body);
  // if (error) {
  //   throw HttpError(400, error.message);
  // }
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndDelete(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  // const { error } = contactShema.validate(req.body);
  // if (error) {
  //   throw HttpError(400, error.message);
  // }
  const data = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

const updateFavoriteContact = async (req, res, next) => {
  const { contactId } = req.params;

  const data = await Contact.findByIdAndUpdate(contactId, req.body);
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

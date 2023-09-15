const express = require("express");

const ctrl = require("../../controlers/contacts");
const { contactSchemas } = require("../../models");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const router = express.Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getOneContactById);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addContactShema),
  ctrl.addOneContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchemas.addContactShema),
  ctrl.updateContact
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteShema),
  ctrl.updateFavoriteContact
);

module.exports = router;

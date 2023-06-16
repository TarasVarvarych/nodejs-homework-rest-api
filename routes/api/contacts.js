const express = require("express");

const ctrl = require("../../controlers");
const { shemas } = require("../../models/contact");
const { validateBody, isValidId } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getOneContactById);

router.post("/", ctrl.addOneContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(shemas.addContactShema),
  ctrl.updateContact
);
router.patch("/:contactId/favorite", isValidId, ctrl.updateFavoriteContact);

module.exports = router;

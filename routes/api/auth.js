const express = require("express");
const router = express.Router();
const { validateBody, authenticate, upload } = require("../../middlewares");
const { userSchemas } = require("../../models");
const ctrl = require("../../controlers/auth");

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrl.register
);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(userSchemas.verifySchema),
  ctrl.resendVerification
);
router.post("/login", validateBody(userSchemas.loginSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch(
  "/subscription",
  authenticate,
  validateBody(userSchemas.subscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;

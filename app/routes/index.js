const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validate = require("../validators");
const { body } = require("express-validator");

router.get("/user", userController.list);
router.post(
  "/user",
  validate([body("title").notEmpty().withMessage("wajib disi").bail()])
);

module.exports = router;

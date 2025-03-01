const express = require("express");
const {creatUser, authenticateUser} = require("../controllers/userController");

const router = express.Router();

router.post("/createUser",creatUser);
router.post("/authenticate",authenticateUser);

module.exports = router;
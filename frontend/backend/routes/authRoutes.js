const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserInfo } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware"); // fixed typo here

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo); // added protect middleware here

module.exports = router;

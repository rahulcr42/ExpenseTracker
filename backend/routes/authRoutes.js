const express = require("express");
<<<<<<< HEAD
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

=======
const router = express.Router();
const { registerUser, loginUser, getUserInfo } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware"); // fixed typo here

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo); // added protect middleware here
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e

module.exports = router;

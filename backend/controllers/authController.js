const User = require("../models/User");
const jwt = require("jsonwebtoken");
<<<<<<< HEAD

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  // Validation: Check for missing fields
=======
const bcrypt = require("bcryptjs");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Register user
const registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
<<<<<<< HEAD
    // Check if email already exists
=======
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

<<<<<<< HEAD
    // Create the user
    const user = await User.create({
      fullName,
      email,
      password,
=======
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
      profileImageUrl,
    });

    res.status(201).json({
      id: user._id,
<<<<<<< HEAD
      user,
      token: generateToken(user._id),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
=======
      fullName: user.fullName,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
<<<<<<< HEAD
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error logging in user", error: err.message });
  }
};

// Get User Info
exports.getUserInfo = async (req, res) => {
=======
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Error logging in user", error: err.message });
  }
};

// Get user info
const getUserInfo = async (req, res) => {
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

<<<<<<< HEAD
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching user info" });
  }
};
=======
    res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user info", error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  generateToken,
};
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e

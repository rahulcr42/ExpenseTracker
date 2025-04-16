const jwt = require('jsonwebtoken');
const User = require('../models/User');

<<<<<<< HEAD
exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized, no token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
=======
const protect = async (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with Bearer
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user to request, excluding password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.error("Token verification failed:", err);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
